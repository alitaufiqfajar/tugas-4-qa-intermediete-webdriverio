class MessageInstagram {
    
    get backNavigation(){
        return $('(//*[@resource-id="com.instagram.android:id/action_bar_button_back"])');
    }

    get inputTextMessage(){
        return $('(//*[@resource-id="com.instagram.android:id/row_thread_composer_edittext"])');
    }

    get buttonSend(){
        return $('com.instagram.android:id/row_thread_composer_button_send');
    }

    async backButton(){
        await this.backButton.click();
    }

    async typeMessage(message){
        await this.inputTextMessage.setValue(message);
    }

    async sendMessage(){
        await this.sendMessage.click();
    }

}

module.exports = new MessageInstagram()