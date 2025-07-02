import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import Button from '../Button.vue'

describe('HelloWorld', () => {
  it('renders properly', () => {
    const wrapper = mount(Button, { props: { msg: 'Hello Vitest' } })
    expect(wrapper.text()).toContain('Hello Vitest')
  })
})
