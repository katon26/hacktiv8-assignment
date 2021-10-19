import 'react-native';
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import {shallow, configure} from 'enzyme';
import renderer from 'react-test-renderer';
import App from '../src/App';
configure({adapter: new Adapter(), disabbleLifecycleMethods: true})

const profileWrapper = shallow(<App />)

jest.mock('@react-navigation/native', () => ({
  useNavigation: component => component,
}))

// jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');
// jest.mock('native-base')

describe('App Screen', () => {
  it('should renders correctly', () => {
    renderer.create(<App />)
  })

  it('should renders `App Screen` module correctly', () => {
    expect(profileWrapper).toMatchSnapshot()
  })

  describe('Check component', () => {
    it('should create find `TextInput`', () => {
      expect(profileWrapper.find('TextInput').exists())
    })

    it('should create `TouchableOpacity` component', () => {
      expect(profileWrapper.find('TouchableOpacity').exists())
    })

    describe('Mount component', () => {
      describe('Event Test', () => {
        it('should change text when `Input` Change', () => {
          const mockCallBack = jest.fn()
          profileWrapper.find('[testID="input-name"]').simulate('change')
          expect(mockCallBack.mock.calls.length)
        })

        it('should click when `Absen` Pressed', () => {
          const mockCallBack = jest.fn()
          profileWrapper.find('[testID="button-absen"]').simulate('press')
          expect(mockCallBack.mock.calls.length)
        })
      })
    })
  })
})
