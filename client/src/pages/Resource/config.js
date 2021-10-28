export const RESOURCE_TYPES = {
  STAFF: 'staff',
  PUPILS: 'pupils',
  ROOMS: 'rooms',
  GROUPS: 'groups',
  CLASSES: 'classes',
}

export const RESOURCE_TYPES_NAME = {
  [RESOURCE_TYPES.STAFF]: 'Staff',
  [RESOURCE_TYPES.PUPILS]: 'Pupil',
  [RESOURCE_TYPES.ROOMS]: 'Room',
  [RESOURCE_TYPES.GROUPS]: 'Group',
  [RESOURCE_TYPES.CLASSES]: 'Class',
}

export const RESOURCE_TYPES_NAMES = {
  [RESOURCE_TYPES.STAFF]: 'Staff',
  [RESOURCE_TYPES.PUPILS]: 'Pupils',
  [RESOURCE_TYPES.ROOMS]: 'Rooms',
  [RESOURCE_TYPES.GROUPS]: 'Groups',
  [RESOURCE_TYPES.CLASSES]: 'Classes',
}

export const useColumnNames = resourceType => {
  const columns = [
    { Header: 'Name', accessor: 'name' }
  ]
  if (resourceType === RESOURCE_TYPES.STAFF) {
    columns.push({ Header: 'Subjects', accessor: 'subjects' })
    columns.push({ Header: 'Years', accessor: 'years' })
  }
  if (resourceType === RESOURCE_TYPES.PUPILS) {
    columns.push({ Header: 'Year', accessor: 'year' })
  }
  if (resourceType === RESOURCE_TYPES.ROOMS) {
    columns.push({ Header: 'Location', accessor: 'location' })
    columns.push({ Header: 'Capacity', accessor: 'capacity' })
  }
  if (resourceType === RESOURCE_TYPES.CLASSES) {
    columns.push({ Header: 'Year', accessor: 'year' })
  }
  return columns
}

export const useResourceFields = () => ({
  [RESOURCE_TYPES.STAFF]: {
    'firstName': 1,
    'lastName': 2,
    'emailAddress': 3,
    'subjects': 4,
    'years': 5,
    'availability': 6,
  }
})
