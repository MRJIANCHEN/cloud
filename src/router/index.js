import App from '../App'
// const shop = r => require.ensure([], () => r(require('../page/shop/shop')), 'shop')

export default [{
  path: '/',
  component: App,
  children: [
    {
      path: '',
      redirect: ''
    }]
}]
