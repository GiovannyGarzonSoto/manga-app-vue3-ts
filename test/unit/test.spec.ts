import { shallowMount } from '@vue/test-utils'
import Loader from '../../src/layout/Loader.vue'

describe('test de prueba', () => {
   test('probando componente', () => {
      const wrapper = shallowMount(Loader)
      expect(wrapper.html).toMatchSnapshot()
   })
})