import { tabList } from './tab';

// Invokes against the Details Page tablis
const customerDetailTabs = document.querySelector('#customer-detail-tabs');
const customerDetailTabsAPI = new tabList(customerDetailTabs, {});

// Temporary so we can debug the tabList API in the browser.
window.customerDetailTabsAPI = customerDetailTabsAPI;