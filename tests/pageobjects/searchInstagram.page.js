class SearchPage {
    get buttonHome(){
        return $('//android.widget.FrameLayout[@content-desc="Home"]/android.view.ViewGroup')
    }
    get buttonSearch(){
        return $('//*[@resource-id="com.instagram.android:id/search_tab"]')
    }
    get textSearch(){
        return $('//*[@resource-id="com.instagram.android:id/action_bar_search_edit_text"]')
    }

    get firstItemResult(){
        // return $('(//*[@resource-id="com.instagram.android:id/row_search_user_info_container"])[1](//*[@resource-id="com.instagram.android:id/row_search_user_info_container"])[1]')
        return $('(//*[@resource-id="com.instagram.android:id/row_search_user_info_container"])[1]')
    }

    async clickButtonHome(){
        await this.buttonHome.click();
    }

    async clickButtonSearch(){
        await this.buttonSearch.click();
    }

    async clickTextSearch(){
        await this.textSearch.click()
    }

    async typeTextSearch(searchText){
        await this.textSearch.setValue(searchText)
    }

    async clickFirstItemResult(){
        await this.firstItemResult.click();
    }

    async clearTextInputSearch(){
        await this.textSearch.clearValue();
    }

}

module.exports = new SearchPage()