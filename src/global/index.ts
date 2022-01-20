import registerElement from './register-element';
import registerIcon from './register-icon';
import { App } from 'vue';
export function globalRegister(app: App): void {
  registerElement(app);
  registerIcon(app);
}
