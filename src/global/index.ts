import registerElement from './register-element';
import { App } from 'vue';
export function globalRegister(app: App): void {
  registerElement(app);
}
