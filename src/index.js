import app from './app';
import "./styles.scss";

const rootEl = document.getElementById('root');
app(rootEl);

if ((module).hot) {
    (module).hot.accept()
}