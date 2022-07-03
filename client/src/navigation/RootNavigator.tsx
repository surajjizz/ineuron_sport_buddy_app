import * as React from 'react';

class RootNavigator {
    navigationRef: any = React.createRef();

    navigate(name: any, params: any = {}) {
        this.navigationRef.current?.navigate(name, params);
    }

    resetRoot(name: any, nestedName: any) {
        this.navigationRef.current?.resetRoot({ index: 0, routes: [{ name: name, state: { routes: [{ name: nestedName }] } }] });
    }

    getRootState() {
        return this.navigationRef.current?.getRootState();
    }

    getCurrentRoute() {
        return this.navigationRef.current?.getCurrentRoute()?.name;
    }

    goBack() {
        this.navigationRef.current?.goBack();
    }

    toggleDrawer(){
        this.navigationRef.current?.toggleDrawer();
    }
}

export default new RootNavigator();
