import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/statistics';
import { Friendlist } from './Friendlist/friendlist';
import { TransactionHistory } from './Transactions/transaction';

import user from '../data/user.json';
import data from '../data/data.json';
import friends from '../data/friends.json';
import transaction from '../data/transactions.json';

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
        key={user.tag}
      />
      <Statistics title="Upload stats" props={data} />
      <Friendlist props={friends} />
      <TransactionHistory props={transaction} />

      {/* <GlobalStyle /> */}
    </div>
  );
};
