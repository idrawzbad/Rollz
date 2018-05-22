# Chainsmith 0.1

github temporary url is https://idrawzbad.github.io/Rollz/


## Pseudocode for first function set

### Game Objects
* item(s)
* modifier(s)
* Token (s)
* Wallet (how much tokens you have)
* Warchest (personal storage of items)
* Store (public storage of available items to purchase / sell)

### Item Attributes - pairs of: (property-value)
* item cost = x tokens (url)
* item image = item.jpg
* Slot = 5
* Strength = y
* Speed = z

### Modifier Attributes
* % chance of success
* properies to change & how much to change by upon success (nested set here? db?)

### Base Item & modifier Functions
* Create item (admin? how will this work decentralized?)
* Buy item (removing item from store into warchest ++ wallet coin to store. how should confirmation work? what about selling p2p?)
* Sell item (removing item from warchest ++ store coin to wallet)

* Create Modifier
* Buy Modifier
* Sell Modifier

### Operational Functions
* selecting item - to see attributes & slot status
* selecting modifier - to see attributes & slot status
* selecting item & modifier together to be combined (& display stats)
* unselecting (canceling) item & modifier
* confirming selection & run combination
  * if success => apply modifier changes to item, then delete object? (or trash?), load selecting item to show changes (maybe also notification?)
  * if fail ==> delete modifier object (or trash), notify failure & display item object

### Warchest?
### Store
