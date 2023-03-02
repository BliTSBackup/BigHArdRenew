REDEFINE.refresh = () => {
    REDEFINE.initUtils();
    REDEFINE.initMenuShrink();
    REDEFINE.initModeToggle();
    REDEFINE.initBackToTop();
    aaa

    if (REDEFINE.theme_config.local_search.enable === true) {
      REDEFINE.initLocalSearch();
    }

    if (REDEFINE.theme_config.code_block.copy === true) {
      REDEFINE.initCopyCode();
    }

    if (REDEFINE.theme_config.lazyload.enable === true) {
      REDEFINE.initLazyLoad();
    }
  }

  REDEFINE.printThemeInfo();
  REDEFINE.refresh();
  REDEFINE.printThemeInfo();
  REDEFINE.refresh();  REDEFINE.printThemeInfo();
  REDEFINE.refresh();  REDEFINE.printThemeInfo();
  REDEFINE.refresh();  REDEFINE.printThemeInfo();
  REDEFINE.refresh();  REDEFINE.printThemeInfo();
  REDEFINE.refresh();
