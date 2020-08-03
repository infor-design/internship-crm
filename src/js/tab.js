class tabList {
  constructor(element, settings) {
    this.element = element;
    this.settings = settings;

    this.tabs = this.element.querySelectorAll('.buttonTab');
    this.contents = this.element.querySelectorAll('.tabContent');

    // Finds an active tab
    if (this.tabs.length) {
      let active = this.tabs[0];
      this.tabs.forEach((tab) => {
        if (tab.classList.contains('active')) {
          active = tab;
        }
      });
      this.select(active);
    }

    this.render();
    this.handleEvents();
  }

  render() {
    if (!this.tabs.length) {
      return;
    }

    this.open(this.selected);
  }

  handleEvents() {
    const clickHandler = function (e) { 
      const target = e.target;
      if (!target.classList.contains('buttonTab')) {
        return;
      }

      console.log(target);
      this.select(target);
      this.open(target);
    }

    this.boundClickHandler = clickHandler.bind(this);
    this.element.addEventListener('click', this.boundClickHandler);
  }

  //This displays the content for the selected tab
  open(elem = undefined) {
    if (!elem) {
      return;
    }

    this.tabs.forEach((tab, i) => {
      const content = this.contents[i];

      const isSelected = this.selected.isEqualNode(tab);

      content.style.display = isSelected ? 'block' : 'none';
      tab.classList[isSelected ? 'add' : 'remove']('active');
    });
  }

  select(elem = undefined) {
    if (!elem) {
      return;
    }

    this.tabs.forEach((tab) => {
      if (elem.isEqualNode(tab)) {
        this.selected = tab;
      }
    });

    if (!this.selected) {
      throw new Error('No tab matched the element provided');
    }
  }

  //This allows us to destroy the tab list
  destroy() {
    if (this.boundClickHandler) {
      this.element.removeEventListener('click', this.boundClickHandler);
      delete this.boundClickHandler;
    }

    this.element = null;
    this.settings = null;
    this.selected = null;

    this.tabs = null;
    this.contents = null;
  }
}

export { tabList };