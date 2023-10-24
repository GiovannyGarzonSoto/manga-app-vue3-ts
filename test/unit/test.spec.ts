import Loader from '../../src/layout/Loader.vue'
import {describe, expect, test} from 'vitest'
import { shallowMount } from '@vue/test-utils'

describe('test de prueba', () => {
   test('probando componente', () => {
      const wrapper = shallowMount(Loader)
      expect(wrapper.html()).toMatchSnapshot()
   })
})