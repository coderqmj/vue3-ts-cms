import 'element-plus/theme-chalk/base.css';
import { App } from 'vue';
import { ElButton } from 'element-plus';
const components = [ElButton];
export default function register(app: App): void {
  for (const component of components) {
    app.component(component.name, component);
  }
}
