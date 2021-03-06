import { sleep } from 'utils';
import { load } from 'utils/wallet';

export default Base =>
  class extends Base {
    async loadData() {
      const {
        // keyStore,
        wallet,
        // contract,
        accountId,
        account,
      } = await load();
      const isLoggedIn = await wallet.isSignedIn();
      let balance = 0;
      if (isLoggedIn) {
        try {
          balance = (await account.getAccountBalance()).available;
        } catch (e) {
          if (~e.message.search('does not exist while viewing')) {
            // wallet.signOut();
            // await sleep(500);
            // keyStore.clear();
            window.localStorage.clear();
            await sleep(500);
            window.location.reload();
            return;
          } else {
            throw e;
          }
        }
      }
      this.state.wallet = {
        isLoggedIn,
        accountId,
        balance,
      };
    }
  };
