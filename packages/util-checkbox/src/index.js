import { SvelPropValidateError } from '@svelement-ui/util-errors';

/**
 * getDisabled
 *
 * only used in group mode
 *
 * @param disabledProp
 * @param groupFlg
 * @param group
 * @param max
 * @param min
 * @param innerChecked
 */
export function getDisabled(disabledProp, groupFlg, group, maxInput, minInput, innerChecked) {
  if (!groupFlg) {
    return disabledProp;
  }

  const max = Number(maxInput);
  const min = Number(minInput);

  if (max && group.length >= max && !innerChecked) {
    return true;
  }

  if (min && group.length <= min && innerChecked) {
    return true;
  }
  return disabledProp;
}

export function getInnerCheckedValue(isGroup, checkedValue, label) {
  // not in group
  if (!isGroup) {
    if (checkedValue !== null && checkedValue !== undefined) {
      return checkedValue;
    }
    return null;
  }

  // in group
  if (checkedValue !== null && checkedValue !== undefined) {
    return checkedValue;
  }

  if (label !== null && label !== undefined) {
    return label;
  }
  return null;
}

export function getValueByInnerChecked(innerChecked, innerCheckedValue, uncheckedValue) {
  if (innerChecked) {
    if (innerCheckedValue === null) {
      return true;
    }
    return innerCheckedValue;
  } else {
    if (uncheckedValue === null || uncheckedValue === undefined) {
      return false;
    }
    return uncheckedValue;
  }
}

export function validateCheckedValue(checkedValue, uncheckedValue) {
  if (checkedValue === null) {
    return;
  }
  if (checkedValue === undefined) {
    return;
  }
  if (uncheckedValue === null) {
    return;
  }
  if (uncheckedValue === undefined) {
    return;
  }

  if (checkedValue === uncheckedValue) {
    throw new SvelPropValidateError('checkedValue is the same with uncheckedValue');
  }
}

export function getGroupByInnerChecked(isGroup, innerChecked, group, innerCheckedValue) {
  if (!isGroup) {
    return group;
  }

  if (innerCheckedValue === null) {
    return group;
  }

  const groupSet = new Set(group);
  if (innerChecked) {
    groupSet.add(innerCheckedValue);
    return Array.from(groupSet);
  }

  groupSet.delete(innerCheckedValue);
  return Array.from(groupSet);
}

export function getInnerCheckedByValue(isGroup, value, group, innerCheckedValue) {
  if (innerCheckedValue === null) {
    return Boolean(value);
  }

  if (!isGroup) {
    return value === innerCheckedValue;
  } else {
    const groupSet = new Set(group);
    return groupSet.has(innerCheckedValue);
  }
}

export function boolNull(value) {
  if (value) {
    return true;
  }
  return null;
}
