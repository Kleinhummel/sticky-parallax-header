import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center'
  },
  contentContainer: {
    alignItems: 'center',
    paddingHorizontal: 20,
    width: '100%' //jkl
  },
  tabContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    height: 32
  },
  countWrapper: {
    width: 14,
    height: 14,
    alignItems: 'center',
    justifyContent: 'center'
  },
  tabText: {
    fontSize: 16
  },
  nestedStyle: {
    alignSelf: 'center',
    width: '100%' //jkl
  },
  tabWrapperFixedTabCount: {
    flex: 1
  }
})
