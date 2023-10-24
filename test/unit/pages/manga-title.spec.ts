import { describe, expect, test } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import MangaTitle from '../../../src/pages/MangaTitle.vue'

describe('<MangaTitle> unit tests', () => {
    test('should be match snapshot', () => {
        const wrapper = shallowMount(MangaTitle)
        expect(wrapper.html()).toMatchSnapshot()
    })
})