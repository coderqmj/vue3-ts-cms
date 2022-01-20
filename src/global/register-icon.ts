import { App } from 'vue';
import { Calendar, Iphone, Avatar } from '@element-plus/icons-vue';
const components = [Calendar, Iphone, Avatar];
export default function register(app: App): void {
  for (const component of components) {
    app.component(component.name, component);
  }
}
