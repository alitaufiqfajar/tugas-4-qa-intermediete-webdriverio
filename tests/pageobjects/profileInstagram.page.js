class ProfileInstagram {
    get profileName(){
        return $('//*[@resource-id="com.instagram.android:id/profile_header_full_name"]')
    }

    get followButton(){
        return $('//*[@resource-id="com.instagram.android:id/profile_header_follow_button"]')
    }

    get unFollowButton(){
        return $('//*[@resource-id="com.instagram.android:id/follow_sheet_unfollow_row"]')
    }

    get messageButton(){
        return $('(//*[@resource-id="com.instagram.android:id/button_container" and @content-desc="Message"])')
    }

    async clickFollow(){
        await this.followButton.click();
    }

    async clickUnfollowButton(){
        await this.unFollowButton.click();
    }

    async verifyUserFullName(inputFullName){
        const fullName = this.profileName.getText()
        expect(fullName).toHaveValue(inputFullName)
    }

    async verifySuccessFollow(inputFullName){
        const btnTextFollow = this.followButton.getText();
        expect(btnTextFollow).toHaveValue(`Following ${inputFullName}`)
    }
    
    async verifySuccessUnFollow(){
        const btnTextFollow = this.followButton.getText();
        expect(btnTextFollow).toHaveValue(`Follow`)
    }

    async clickButtonMessage(){
        await this.messageButton.click();
    }

}
module.exports = new ProfileInstagram();