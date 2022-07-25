import { useState, useMemo } from 'react';
import { Modal, Input } from 'antd';
import cloneDeep from 'lodash/cloneDeep';
import EasyTree from '@/components/Tree';
import employees from '@/mock/employees';
import { each } from '@/utils';
import { isArray } from '@is';
import IndexBar from '../src';
import styles from './app.module.less';

export class Employee {
  static map = {};
  static orgMap = {};
  constructor(values, parent) {
    /* {
      id: 2055,
      nick: "HAWK_MA",
      sectorId: 66,
    } */
    Object.assign(this, values);
    this.constructor.map[this.id] = this;
    this.title = this.nick;
    // 标识是员工
    this.isEmployee = true;
    this.pid = this.sectorId;
  }

  getData() {
    return {
      nick: this.nick,
      adminUserId: this.id,
      // toString: () => {
      //   return this.id;
      // },
    };
  }

  get department() {
    return this.constructor.getDepartmentNames(this.pid);
  }

  static getValueWithId(id) {
    return this.map[id];
  }
  static getValuesWithIds(ids) {
    return this.filterEmployee(ids).map((o) =>
      this.getValueWithId(o)?.getData(),
    );
  }
  static addOrg(o) {
    this.orgMap[o.id] = o;
  }
  static filterEmployee(ids) {
    return ids.filter((id) => this.map[id]);
  }
  static getDepartmentNames(orgId) {
    const org = this.orgMap[orgId];
    if (org && org.pid != null) {
      const parentOrgName = this.getDepartmentNames(org.pid);
      return parentOrgName ? `${org.name}/${parentOrgName}` : org.name;
    }
    return org?.name;
  }
  static getParentIds(orgId) {
    const org = this.orgMap[orgId];
    if (org && org.pid != null) {
      const parentOrgIds = this.getParentIds(org.pid);
      return parentOrgIds ? [org.id, ...parentOrgIds] : [org.id];
    }
    return org ? [org.id] : [];
  }
}

function App() {
  const [search, setSearch] = useState();
  const dataSource = useMemo(() => {
    const ret = cloneDeep(employees);
    each(
      ret,
      (o) => {
        o.title = o.name;
        Employee.addOrg(o);
        if (o.nodes == null || (isArray(o.nodes) && o.nodes.length === 0)) {
          // 修改数据结构, antd不支持多个children字段
          // adminUsers nodes
          // 只有最底层的组织才有员工
          o.nodes = o.adminUsers.map((q) => new Employee(q, o));
        } /*  else {
          // o.selectable = false;
          // o.checkable = false;
        } */
      },
      'nodes',
    );
    return ret;
  });
  const defaultExpandedKeys = useMemo(() => employees.map((o) => o.id), []);

  return (
    <Modal visible title="IndexBar Demo" footer={null} width="1000px">
      <Input value={search} onChange={setSearch} />
      <IndexBar>
        <div className={styles.tree}>
          <EasyTree
            treeData={dataSource}
            fieldNames={{
              title: 'title',
              key: 'id',
              children: 'nodes',
            }}
            searchValue={search}
            checkable
            blockNode
            autoExpandParent={false}
            defaultExpandedKeys={defaultExpandedKeys}
          />
        </div>
      </IndexBar>
    </Modal>
  );
}

export default App;
