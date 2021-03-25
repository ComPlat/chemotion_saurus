const algoliasearch = require('algoliasearch');

const client = algoliasearch('YM765JKKDH', 'd8d253ff98490bb748b554ae121526c6');
const index = client.initIndex('chemotion_newsroom_docs');

index.exists().then(result => {
  console.log(result);
});
