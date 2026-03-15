// ============================================================
//  GOOD VIBES FARM STAY — Shared Data Store
//  All 3 portals share orders via localStorage + BroadcastChannel
// ============================================================

const GV = {

  // ---------- MENU DATA (from actual Good Vibes menu) ----------
  menu: [
    // VEG STARTERS
    { id:'v1',  name:'Chatpate',           cat:'Veg Starters',     price:160, emoji:'🥗'  },
    { id:'v2',  name:'French Fry',         cat:'Veg Starters',     price:200, emoji:'🍟'  },
    { id:'v3',  name:'Green Salad',        cat:'Veg Starters',     price:180, emoji:'🥗'  },
    { id:'v4',  name:'Papad Masala',       cat:'Veg Starters',     price:200, emoji:'🫓'  },
    { id:'v5',  name:'Veg Pakora',         cat:'Veg Starters',     price:180, emoji:'🧆'  },
    { id:'v6',  name:'Aloo Pakora',        cat:'Veg Starters',     price:160, emoji:'🧆'  },
    { id:'v7',  name:'Paneer Pakora',      cat:'Veg Starters',     price:320, emoji:'🧆'  },
    { id:'v8',  name:'Peanuts Sadheko',    cat:'Veg Starters',     price:200, emoji:'🥜'  },
    { id:'v9',  name:'Bhatmas Sadheko',    cat:'Veg Starters',     price:160, emoji:'🫘'  },
    { id:'v10', name:'Waiwai Sadheko',     cat:'Veg Starters',     price:160, emoji:'🍜'  },
    { id:'v11', name:'Aloo Jeera Sadheko', cat:'Veg Starters',     price:160, emoji:'🥔'  },
    { id:'v12', name:'Chips Chilly',       cat:'Veg Starters',     price:250, emoji:'🌶️' },
    // NON-VEG STARTERS
    { id:'n1',  name:'Chicken Wings',      cat:'Non-Veg Starters', price:350, emoji:'🍗'  },
    { id:'n2',  name:'Chicken Chilly',     cat:'Non-Veg Starters', price:380, emoji:'🌶️' },
    { id:'n3',  name:'Chicken Dry Fry',    cat:'Non-Veg Starters', price:350, emoji:'🍗'  },
    { id:'n4',  name:'Chicken Sadheko',    cat:'Non-Veg Starters', price:350, emoji:'🍗'  },
    { id:'n5',  name:'Hot Wings',          cat:'Non-Veg Starters', price:400, emoji:'🔥'  },
    { id:'n6',  name:'Chicken Sausage',    cat:'Non-Veg Starters', price:350, emoji:'🌭'  },
    { id:'n7',  name:'Sausage Chilly',     cat:'Non-Veg Starters', price:400, emoji:'🌭'  },
    { id:'n8',  name:'Sukuti Sadheko',     cat:'Non-Veg Starters', price:380, emoji:'🥩'  },
    { id:'n9',  name:'Sukuti Fry',         cat:'Non-Veg Starters', price:400, emoji:'🥩'  },
    { id:'n10', name:'Pork Chilly',        cat:'Non-Veg Starters', price:400, emoji:'🥩'  },
    { id:'n11', name:'Pork Dameko',        cat:'Non-Veg Starters', price:350, emoji:'🥩'  },
    { id:'n12', name:'Fish Fry',           cat:'Non-Veg Starters', price:280, emoji:'🐟'  },
    { id:'n13', name:'Meatballs',          cat:'Non-Veg Starters', price:360, emoji:'🍖'  },
    // FRIED RICE
    { id:'r1',  name:'Veg Fried Rice',     cat:'Fried Rice',       price:150, emoji:'🍚'  },
    { id:'r2',  name:'Egg Fried Rice',     cat:'Fried Rice',       price:180, emoji:'🍳'  },
    { id:'r3',  name:'Sausage Fried Rice', cat:'Fried Rice',       price:220, emoji:'🍚'  },
    { id:'r4',  name:'Chicken Fried Rice', cat:'Fried Rice',       price:230, emoji:'🍚'  },
    { id:'r5',  name:'Pork Fried Rice',    cat:'Fried Rice',       price:250, emoji:'🍚'  },
    { id:'r6',  name:'Mix Fried Rice',     cat:'Fried Rice',       price:300, emoji:'🍚'  },
    // MOMO
    { id:'m1',  name:'Chicken Mo:Mo',      cat:'Mo:Mo',            price:200, emoji:'🥟'  },
    { id:'m2',  name:'Chicken Mo:Mo Fry',  cat:'Mo:Mo',            price:250, emoji:'🥟'  },
    // THUKPA
    { id:'t1',  name:'Veg Thukpa',         cat:'Thukpa',           price:120, emoji:'🍜'  },
    { id:'t2',  name:'Chicken Thukpa',     cat:'Thukpa',           price:200, emoji:'🍜'  },
    { id:'t3',  name:'Pork Thukpa',        cat:'Thukpa',           price:220, emoji:'🍜'  },
    // KHANA SET
    { id:'k1',  name:'Veg Khana Set',      cat:'Khana Set',        price:250, emoji:'🍱'  },
    { id:'k2',  name:'Chicken Khana Set',  cat:'Khana Set',        price:450, emoji:'🍱'  },
    { id:'k3',  name:'Pork Khana Set',     cat:'Khana Set',        price:500, emoji:'🍱'  },
    { id:'k4',  name:'Fish Khana Set',     cat:'Khana Set',        price:500, emoji:'🍱'  },
    // CHOWMEIN
    { id:'c1',  name:'Veg Chowmein',       cat:'Chowmein',         price:150, emoji:'🍝'  },
    { id:'c2',  name:'Egg Chowmein',       cat:'Chowmein',         price:180, emoji:'🍝'  },
    { id:'c3',  name:'Sausage Chowmein',   cat:'Chowmein',         price:200, emoji:'🍝'  },
    { id:'c4',  name:'Chicken Chowmein',   cat:'Chowmein',         price:220, emoji:'🍝'  },
    { id:'c5',  name:'Pork Chowmein',      cat:'Chowmein',         price:250, emoji:'🍝'  },
    { id:'c6',  name:'Mix Chowmein',       cat:'Chowmein',         price:300, emoji:'🍝'  },
    // NOODLES
    { id:'nd1', name:'Current Noodles',    cat:'Noodles',          price:100, emoji:'🍜'  },
    { id:'nd2', name:'Egg Noodles',        cat:'Noodles',          price:200, emoji:'🍜'  },
    { id:'nd3', name:'Sausage Noodles',    cat:'Noodles',          price:200, emoji:'🍜'  },
    { id:'nd4', name:'Egg & Sausage Noodles', cat:'Noodles',       price:250, emoji:'🍜'  },
    { id:'nd5', name:'Buldak Only',        cat:'Noodles',          price:300, emoji:'🔥'  },
    { id:'nd6', name:'Buldak + Egg',       cat:'Noodles',          price:350, emoji:'🔥'  },
    { id:'nd7', name:'Buldak + Sausage',   cat:'Noodles',          price:400, emoji:'🔥'  },
    { id:'nd8', name:'Buldak + Egg & Sausage', cat:'Noodles',      price:450, emoji:'🔥'  },
    // CHEF'S SPECIAL
    { id:'s1',  name:'Chamre Set (Chicken)', cat:"Chef's Special", price:350, emoji:'⭐'  },
    { id:'s2',  name:'Chamre Set (Pork)',    cat:"Chef's Special", price:380, emoji:'⭐'  },
    { id:'s3',  name:'Chamre Set (Fish)',    cat:"Chef's Special", price:380, emoji:'⭐'  },
    { id:'s4',  name:'Pork Khutti',          cat:"Chef's Special", price:280, emoji:'⭐'  },
    // HOT DRINKS
    { id:'h1',  name:'Tea (Black)',          cat:'Hot Drinks',      price:30,  emoji:'☕'  },
    { id:'h2',  name:'Tea (Milk)',           cat:'Hot Drinks',      price:50,  emoji:'🍵'  },
    { id:'h3',  name:'Coffee (Black)',       cat:'Hot Drinks',      price:50,  emoji:'☕'  },
    { id:'h4',  name:'Coffee (Milk)',        cat:'Hot Drinks',      price:100, emoji:'☕'  },
    { id:'h5',  name:'Hot Lemon',            cat:'Hot Drinks',      price:110, emoji:'🍋'  },
    { id:'h6',  name:'Hot Lemon + Honey',    cat:'Hot Drinks',      price:150, emoji:'🍯'  },
    { id:'h7',  name:'Ginger Tea',           cat:'Hot Drinks',      price:40,  emoji:'🫖'  },
    { id:'h8',  name:'Blue Tea',             cat:'Hot Drinks',      price:40,  emoji:'🫖'  },
    // COLD DRINKS
    { id:'d1',  name:'Coke (Small)',         cat:'Cold Drinks',     price:100, emoji:'🥤'  },
    { id:'d2',  name:'Coke (Large)',         cat:'Cold Drinks',     price:260, emoji:'🥤'  },
    { id:'d3',  name:'Sprite (Small)',       cat:'Cold Drinks',     price:100, emoji:'🥤'  },
    { id:'d4',  name:'Sprite (Large)',       cat:'Cold Drinks',     price:260, emoji:'🥤'  },
    { id:'d5',  name:'Xtreme',              cat:'Cold Drinks',     price:200, emoji:'⚡'  },
    { id:'d6',  name:'Red Bull',             cat:'Cold Drinks',     price:300, emoji:'🐂'  },
    { id:'d7',  name:'Peach Iced Tea',       cat:'Cold Drinks',     price:150, emoji:'🍑'  },
    { id:'d8',  name:'Lassi',               cat:'Cold Drinks',     price:120, emoji:'🥛'  },
    { id:'d9',  name:'Badam Drink',          cat:'Cold Drinks',     price:150, emoji:'🥛'  },
    // BEER
    { id:'b1',  name:'Gorkha (Small)',       cat:'Beer',            price:280, emoji:'🍺'  },
    { id:'b2',  name:'Gorkha (Large)',       cat:'Beer',            price:480, emoji:'🍺'  },
    { id:'b3',  name:'Tuborg',              cat:'Beer',            price:580, emoji:'🍺'  },
    { id:'b4',  name:'Barahsinghe (Small)',  cat:'Beer',            price:300, emoji:'🍺'  },
    { id:'b5',  name:'Barahsinghe (Large)',  cat:'Beer',            price:550, emoji:'🍺'  },
    { id:'b6',  name:'Carlsberg',           cat:'Beer',            price:600, emoji:'🍺'  },
    // WINE
    { id:'w1',  name:'Divine Wine',          cat:'Wine',            price:1100,emoji:'🍷'  },
    { id:'w2',  name:'Big Master',           cat:'Wine',            price:1200,emoji:'🍷'  },
    { id:'w3',  name:'Manang',              cat:'Wine',            price:1300,emoji:'🍷'  },
    // HARD DRINKS
    { id:'hd1', name:'Black Oak (Full)',     cat:'Hard Drinks',     price:2000,emoji:'🥃'  },
    { id:'hd2', name:'Black Oak (Half)',     cat:'Hard Drinks',     price:1100,emoji:'🥃'  },
    { id:'hd3', name:'Black Oak (Quarter)', cat:'Hard Drinks',     price:600, emoji:'🥃'  },
    { id:'hd4', name:'Black Oak (90ml)',     cat:'Hard Drinks',     price:320, emoji:'🥃'  },
    { id:'hd5', name:'8848 Vodka (Full)',    cat:'Hard Drinks',     price:3300,emoji:'🥃'  },
    { id:'hd6', name:'8848 Vodka (Half)',    cat:'Hard Drinks',     price:1700,emoji:'🥃'  },
    { id:'hd7', name:'Khukuri Rum (Full)',   cat:'Hard Drinks',     price:2900,emoji:'🥃'  },
    { id:'hd8', name:'Khukuri Rum (Half)',   cat:'Hard Drinks',     price:1500,emoji:'🥃'  },
    { id:'hd9', name:'OD Regular (Full)',    cat:'Hard Drinks',     price:4000,emoji:'🥃'  },
    { id:'hd10',name:'OD Regular (Half)',    cat:'Hard Drinks',     price:2100,emoji:'🥃'  },
    { id:'hd11',name:'OD Black Chimney (Full)', cat:'Hard Drinks',  price:4800,emoji:'🥃'  },
    { id:'hd12',name:'OD Black Chimney (Half)', cat:'Hard Drinks',  price:2400,emoji:'🥃'  },
  ],

  // ---------- ORDERS STORE ----------
  getOrders() {
    try { return JSON.parse(localStorage.getItem('gv_orders') || '[]'); }
    catch(e) { return []; }
  },

  saveOrders(orders) {
    localStorage.setItem('gv_orders', JSON.stringify(orders));
    // Broadcast to other tabs/windows
    try {
      const bc = new BroadcastChannel('gv_orders');
      bc.postMessage({ type: 'update', orders });
      bc.close();
    } catch(e) {}
    // Fallback: storage event fires in other tabs automatically
  },

  addOrder(order) {
    const orders = this.getOrders();
    order.id = 'ORD-' + Date.now();
    order.time = new Date().toISOString();
    order.status = 'pending'; // pending | cooking | ready | paid
    orders.unshift(order);
    this.saveOrders(orders);
    return order;
  },

  updateStatus(orderId, status) {
    const orders = this.getOrders();
    const idx = orders.findIndex(o => o.id === orderId);
    if (idx !== -1) {
      orders[idx].status = status;
      orders[idx].updatedAt = new Date().toISOString();
      this.saveOrders(orders);
    }
  },

  deleteOrder(orderId) {
    const orders = this.getOrders().filter(o => o.id !== orderId);
    this.saveOrders(orders);
  },

  deleteAllPaid() {
    const orders = this.getOrders().filter(o => o.status !== 'paid');
    this.saveOrders(orders);
  },

  clearAllOrders() {
    this.saveOrders([]);
  },

  deleteReceipt(receiptNo) {
    const receipts = this.getReceipts().filter(r => r.receiptNo !== receiptNo);
    localStorage.setItem('gv_receipts', JSON.stringify(receipts));
  },

  clearAllReceipts() {
    localStorage.setItem('gv_receipts', JSON.stringify([]));
  },

  // Listen for cross-tab changes
  onUpdate(callback) {
    // BroadcastChannel (same origin, cross-tab)
    try {
      const bc = new BroadcastChannel('gv_orders');
      bc.onmessage = (e) => { if (e.data.type === 'update') callback(e.data.orders); };
    } catch(e) {}
    // Fallback: storage event
    window.addEventListener('storage', (e) => {
      if (e.key === 'gv_orders') {
        try { callback(JSON.parse(e.newValue || '[]')); } catch(err) {}
      }
    });
  },

  // Saved receipts
  getReceipts() {
    try { return JSON.parse(localStorage.getItem('gv_receipts') || '[]'); }
    catch(e) { return []; }
  },

  saveReceipt(receipt) {
    const receipts = this.getReceipts();
    receipt.savedAt = new Date().toISOString();
    receipt.receiptNo = 'GV-' + new Date().toISOString().slice(0,10).replace(/-/g,'') + '-' + String(receipts.length + 1).padStart(4,'0');
    receipts.unshift(receipt);
    localStorage.setItem('gv_receipts', JSON.stringify(receipts));
    return receipt;
  },

  fmtPrice: (n) => 'Rs. ' + n.toLocaleString(),
  fmtTime: (iso) => {
    const d = new Date(iso);
    return d.toLocaleTimeString('en-GB', { hour:'2-digit', minute:'2-digit' }) +
           ' · ' + d.toLocaleDateString('en-GB');
  },

  categories() {
    return [...new Set(this.menu.map(i => i.cat))];
  }
};
