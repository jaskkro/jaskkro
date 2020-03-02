const spotifyClientId = '34924ab8a5b2427995aa3f2e426257f1';
const spotifySecret = 'df82f218ab094af6bcf54db8724a7a0e';

export default {
    /*
     * getClientId
     * @return app spotify client id
     */
    getClientId() {
        return spotifyClientId;
    },
    /*
     * getClientId
     * @return my spotify api secret key for this application
     */
    getSecret() {
        return spotifySecret;
    }
}
