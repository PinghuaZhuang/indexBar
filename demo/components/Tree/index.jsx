/**
 * @file 扩展 tree 组件
 * @description
 *    1. 添加前端搜索功能
 */
import { useMemo, useState, useCallback, useEffect } from 'react';
import { Tree } from 'antd';
import { isEmptyString } from '@is';
import { scrollIntoView, getScrollContainer, each } from '@/utils';
import classNames from 'classnames';
import cloneDeep from 'lodash/cloneDeep';

let _id = 0;
let timer = null;

// 查找数据并高亮, 展开父节点
const loop = (options) => {
  const { data, searchValue, fieldNames, expandedKeys, hasSearch, pid } =
    options;
  const {
    title: titleField,
    children: childrenField,
    // key: keyField,
    pid: pidField = 'pid',
  } = fieldNames;

  if (searchValue == null || isEmptyString(searchValue)) {
    return data;
  }

  const ret = data.map((item) => {
    let title = item[titleField];
    const index = title.indexOf(searchValue);
    const beforeStr = title.substring(0, index);
    const afterStr = title.slice(index + searchValue.length);
    let unfilterNode = false;

    if (index > -1) {
      title = (
        <span>
          {beforeStr}
          <span className="highlight">{searchValue}</span>
          {afterStr}
        </span>
      );

      hasSearch && item[pidField] && expandedKeys.push(item[pidField], pid);
      unfilterNode = false;
    } else {
      title = <>{item[titleField]}</>;
      unfilterNode = true;
    }

    if (item[childrenField]) {
      return {
        ...item,
        [titleField]: title,
        [childrenField]: loop({
          ...options,
          data: item[childrenField],
          pid: item[pidField],
        }),
      };
    }

    return { ...item, [titleField]: title, unfilterNode };
  });
  return ret;
};

const EasyTree = (props) => {
  const {
    treeData,
    searchValue,
    onExpand: userOnExpand,
    fieldNames = { title: 'title', children: 'children', key: 'key' },
    defaultExpandedKeys = [],
  } = props;
  const [expandedKeys, setExpandedKeys] = useState(defaultExpandedKeys);
  const hasSearch = 'searchValue' in props;
  const id = useMemo(() => _id++, []);

  const _treeData = useMemo(() => {
    if (searchValue === null || isEmptyString(searchValue)) {
      setExpandedKeys(defaultExpandedKeys);
      each(
        cloneDeep(treeData),
        (o) => {
          o.unfilterNode = false;
        },
        'nodes',
      );
      return treeData;
    }
    const _expandedKeys = [...defaultExpandedKeys];
    const ret = loop({
      data: [...treeData],
      searchValue: searchValue?.trim && searchValue?.trim(),
      fieldNames,
      expandedKeys: _expandedKeys,
      // setExpandedKeys,
      hasSearch,
    });

    // 设置默认展开
    hasSearch && setExpandedKeys(_expandedKeys);
    ret.actionScoll = true;
    return ret;
    // 不监听 fieldNames
  }, [searchValue, treeData, hasSearch]);

  const calcProps = { treeData: _treeData };
  if (hasSearch) {
    calcProps.expandedKeys = expandedKeys;
    // 手动点击展开
    calcProps.onExpand = useCallback((_expandedKeys, ...rest) => {
      setExpandedKeys(_expandedKeys);
      userOnExpand && userOnExpand(_expandedKeys, ...rest);
    }, []);
  }

  // 搜索后自动聚焦
  useEffect(() => {
    if (!hasSearch || !_treeData.actionScoll) return;
    _treeData.actionScoll = false;
    const container = getScrollContainer(
      document.querySelector(`.jn-tree-${id}`),
    );
    if (container == null) return;
    clearTimeout(timer);
    timer = setTimeout(() => {
      const target = container.querySelector('.highlight');
      if (container == null || target == null) {
        return;
      }
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }, 300);
    return () => clearTimeout(timer);
  }, [calcProps.expandedKeys, hasSearch, _treeData]);

  return (
    <Tree
      autoExpandParent
      {...props}
      {...calcProps}
      className={classNames('jn-tree', `jn-tree-${id}`, props.className)}
    />
  );
};

export default EasyTree;
