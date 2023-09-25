class SearchPage {
    get buttonHome(){
        return $('//android.widget.FrameLayout[@content-desc="Home"]/android.view.ViewGroup')
    }
    get buttonSearch(){
        return $('//*[@resource-id="com.instagram.android:id/search_tab"]')
    }

    async clickButtonHome(){
        await this.buttonHome.click();
    }

    async clickButtonSearch(){
        await this.buttonSearch.click();
    }
}

module.exports = new SearchPage()