import _get from 'lodash/get'
import _map from 'lodash/map'
import _toUpper from 'lodash/toUpper'
import _isArray from 'lodash/isArray'
import _size from 'lodash/size'
import _reduce from 'lodash/reduce'

export const formatToSelect = (listOfElements, itemLabel, itemValue = 'id', extraKey = '', separator = ' ') => {
  const itemLabelArray = !_isArray(itemLabel) ? [itemLabel] : itemLabel
  return _map(listOfElements, (item) => {
    const mappedItem = {
      label: _reduce(itemLabelArray, (label, keyLabel, index) => (
        label.concat(`${index > 0 ? separator : ''}${_toUpper(_get(item, keyLabel, ''))}`)
      ), ''),
      value: _get(item, [itemValue])
    }
    if (_size(extraKey)) {
      mappedItem[extraKey] = _get(item, `${extraKey}`, null)
    }
    return mappedItem
  })
}
