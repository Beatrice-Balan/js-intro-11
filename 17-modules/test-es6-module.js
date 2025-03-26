import { name, hi, obj } from './NavHelper.js';

hi();
console.log(name)
console.log(obj)

import { Batch11Helper } from './Batch11Helper.js';

Batch11Helper.funcA()
Batch11Helper.funcB()

import { BrowserHelper } from './BrowserHelper.js';

console.log(BrowserHelper.browserName)
console.log(BrowserHelper.launch)

import { close, refresh } from './AutomationHelper.js'
import open from './AutomationHelper.js';

open()
close()
refresh()
open()
