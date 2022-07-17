// Automatically generated with Reach 0.1.11 (578589af)
/* eslint-disable */
export const _version = '0.1.11';
export const _versionHash = '0.1.11 (578589af)';
export const _backendVersion = 17;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Tuple([ctc2, ctc2, ctc3]);
  const ctc5 = stdlib.T_Array(ctc4, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc6 = stdlib.T_Null;
  const ctc7 = stdlib.T_Data({
    None: ctc6,
    Some: ctc6
    });
  const map0_ctc = ctc7;
  
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1, ctc5],
      5: [ctc0, ctc1, ctc3, ctc2, ctc5, ctc2, ctc2],
      6: [ctc0, ctc1, ctc3, ctc2, ctc5, ctc2, ctc2]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_Tuple([ctc1]);
  return {
    mapDataTy: ctc2
    };
  };
export async function Alice(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Alice expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Alice expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_Token;
  const ctc3 = stdlib.T_Tuple([]);
  const ctc4 = stdlib.T_Bool;
  const ctc5 = stdlib.T_Address;
  const ctc6 = stdlib.T_UInt;
  const ctc7 = stdlib.T_Tuple([ctc6, ctc6, ctc4]);
  const ctc8 = stdlib.T_Array(ctc7, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: false,
    ty: map0_ctc
    });
  
  
  const v396 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
  const v397 = [v396];
  const v401 = stdlib.protect(ctc2, interact.tokenId, 'for Alice\'s interact field tokenId');
  
  const txn1 = await (ctc.sendrecv({
    args: [v401],
    evt_cnt: 1,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:20:9:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc2],
    pay: [stdlib.checkedBigNumberify('./index.rsh:20:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v405], secs: v407, time: v406, didSend: v27, from: v404 } = txn1;
      
      const v408 = v397[stdlib.checkedBigNumberify('./index.rsh:20:9:dot', stdlib.UInt_max, '0')];
      const v410 = v408[stdlib.checkedBigNumberify('./index.rsh:20:9:dot', stdlib.UInt_max, '1')];
      const v411 = v408[stdlib.checkedBigNumberify('./index.rsh:20:9:dot', stdlib.UInt_max, '2')];
      const v412 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v410, v411];
      const v413 = stdlib.Array_set(v397, stdlib.checkedBigNumberify('./index.rsh:20:9:dot', stdlib.UInt_max, '0'), v412);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v405
        });
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc2],
    waitIfNotPresent: false
    }));
  const {data: [v405], secs: v407, time: v406, didSend: v27, from: v404 } = txn1;
  const v408 = v397[stdlib.checkedBigNumberify('./index.rsh:20:9:dot', stdlib.UInt_max, '0')];
  const v410 = v408[stdlib.checkedBigNumberify('./index.rsh:20:9:dot', stdlib.UInt_max, '1')];
  const v411 = v408[stdlib.checkedBigNumberify('./index.rsh:20:9:dot', stdlib.UInt_max, '2')];
  const v412 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v410, v411];
  const v413 = stdlib.Array_set(v397, stdlib.checkedBigNumberify('./index.rsh:20:9:dot', stdlib.UInt_max, '0'), v412);
  ;
  ;
  const txn2 = await (ctc.sendrecv({
    args: [v404, v405, v413],
    evt_cnt: 0,
    funcNum: 1,
    lct: v406,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:23:9:dot', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:22:15:decimal', stdlib.UInt_max, '10000000000'), v405]]],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [], secs: v417, time: v416, didSend: v34, from: v415 } = txn2;
      
      ;
      const v418 = v413[stdlib.checkedBigNumberify('./index.rsh:23:9:dot', stdlib.UInt_max, '0')];
      const v419 = v418[stdlib.checkedBigNumberify('./index.rsh:23:9:dot', stdlib.UInt_max, '0')];
      const v420 = stdlib.add(v419, stdlib.checkedBigNumberify('./index.rsh:22:15:decimal', stdlib.UInt_max, '10000000000'));
      const v423 = v418[stdlib.checkedBigNumberify('./index.rsh:23:9:dot', stdlib.UInt_max, '1')];
      const v424 = v418[stdlib.checkedBigNumberify('./index.rsh:23:9:dot', stdlib.UInt_max, '2')];
      const v425 = [v420, v423, v424];
      const v426 = stdlib.Array_set(v413, stdlib.checkedBigNumberify('./index.rsh:23:9:dot', stdlib.UInt_max, '0'), v425);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./index.rsh:22:15:decimal', stdlib.UInt_max, '10000000000'),
        kind: 'to',
        tok: v405
        });
      
      const v429 = true;
      const v430 = stdlib.checkedBigNumberify('./index.rsh:28:52:decimal', stdlib.UInt_max, '0');
      const v431 = v416;
      const v437 = v426;
      const v438 = stdlib.checkedBigNumberify('./index.rsh:15:9:after expr stmt semicolon', stdlib.UInt_max, '0');
      
      if (await (async () => {
        const v441 = stdlib.lt(v430, stdlib.checkedBigNumberify('./index.rsh:30:31:decimal', stdlib.UInt_max, '3'));
        const v442 = v429 ? v441 : false;
        
        return v442;})()) {
        const v449 = stdlib.add(v431, stdlib.checkedBigNumberify('./index.rsh:48:27:decimal', stdlib.UInt_max, '5000'));
        sim_r.isHalt = false;
        }
      else {
        const v492 = true;
        const v493 = stdlib.checkedBigNumberify('./index.rsh:54:54:decimal', stdlib.UInt_max, '3');
        const v494 = v431;
        const v500 = v437;
        const v501 = v438;
        
        if (await (async () => {
          const v504 = stdlib.ge(v493, stdlib.checkedBigNumberify('./index.rsh:56:34:decimal', stdlib.UInt_max, '1'));
          const v505 = v492 ? v504 : false;
          
          return v505;})()) {
          const v512 = stdlib.add(v494, stdlib.checkedBigNumberify('./index.rsh:70:27:decimal', stdlib.UInt_max, '5000'));
          sim_r.isHalt = false;
          }
        else {
          const v567 = v500[stdlib.checkedBigNumberify('./index.rsh:75:19:application', stdlib.UInt_max, '0')];
          const v568 = v567[stdlib.checkedBigNumberify('./index.rsh:75:19:application', stdlib.UInt_max, '0')];
          sim_r.txns.push({
            kind: 'from',
            to: v404,
            tok: v405
            });
          sim_r.txns.push({
            kind: 'from',
            to: v404,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            kind: 'halt',
            tok: v405
            })
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          }}
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc5, ctc2, ctc8],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v417, time: v416, didSend: v34, from: v415 } = txn2;
  ;
  const v418 = v413[stdlib.checkedBigNumberify('./index.rsh:23:9:dot', stdlib.UInt_max, '0')];
  const v419 = v418[stdlib.checkedBigNumberify('./index.rsh:23:9:dot', stdlib.UInt_max, '0')];
  const v420 = stdlib.add(v419, stdlib.checkedBigNumberify('./index.rsh:22:15:decimal', stdlib.UInt_max, '10000000000'));
  const v423 = v418[stdlib.checkedBigNumberify('./index.rsh:23:9:dot', stdlib.UInt_max, '1')];
  const v424 = v418[stdlib.checkedBigNumberify('./index.rsh:23:9:dot', stdlib.UInt_max, '2')];
  const v425 = [v420, v423, v424];
  const v426 = stdlib.Array_set(v413, stdlib.checkedBigNumberify('./index.rsh:23:9:dot', stdlib.UInt_max, '0'), v425);
  ;
  const v427 = stdlib.addressEq(v404, v415);
  stdlib.assert(v427, {
    at: './index.rsh:23:9:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Alice'
    });
  stdlib.protect(ctc0, await interact.alert(), {
    at: './index.rsh:24:23:application',
    fs: ['at ./index.rsh:24:23:application call to [unknown function] (defined at: ./index.rsh:24:23:function exp)', 'at ./index.rsh:24:23:application call to "liftedInteract" (defined at: ./index.rsh:24:23:application)'],
    msg: 'alert',
    who: 'Alice'
    });
  
  let v429 = true;
  let v430 = stdlib.checkedBigNumberify('./index.rsh:28:52:decimal', stdlib.UInt_max, '0');
  let v431 = v416;
  let v437 = v426;
  let v438 = stdlib.checkedBigNumberify('./index.rsh:15:9:after expr stmt semicolon', stdlib.UInt_max, '0');
  
  while (await (async () => {
    const v441 = stdlib.lt(v430, stdlib.checkedBigNumberify('./index.rsh:30:31:decimal', stdlib.UInt_max, '3'));
    const v442 = v429 ? v441 : false;
    
    return v442;})()) {
    const v449 = stdlib.add(v431, stdlib.checkedBigNumberify('./index.rsh:48:27:decimal', stdlib.UInt_max, '5000'));
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 6,
      out_tys: [ctc3],
      timeoutAt: ['time', v449],
      waitIfNotPresent: false
      }));
    if (txn3.didTimeout) {
      const txn4 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 7,
        out_tys: [ctc3],
        timeoutAt: undefined /* mto */,
        waitIfNotPresent: false
        }));
      const {data: [v482], secs: v484, time: v483, didSend: v191, from: v481 } = txn4;
      undefined /* setApiDetails */;
      ;
      const v485 = false;
      await txn4.getOutput('whitelisters_alertEnd', 'v485', ctc4, v485);
      const cv429 = v429;
      const cv430 = v430;
      const cv431 = v483;
      const cv437 = v437;
      const cv438 = v438;
      
      v429 = cv429;
      v430 = cv430;
      v431 = cv431;
      v437 = cv437;
      v438 = cv438;
      
      continue;
      }
    else {
      const {data: [v465], secs: v467, time: v466, didSend: v157, from: v464 } = txn3;
      undefined /* setApiDetails */;
      ;
      const v469 = true;
      await txn3.getOutput('whitelisters_whiteListMyAddress', 'v469', ctc4, v469);
      await stdlib.mapSet(map0, v464, null);
      const v476 = stdlib.add(v430, stdlib.checkedBigNumberify('./index.rsh:45:36:decimal', stdlib.UInt_max, '1'));
      const cv429 = v429;
      const cv430 = v476;
      const cv431 = v466;
      const cv437 = v437;
      const cv438 = v438;
      
      v429 = cv429;
      v430 = cv430;
      v431 = cv431;
      v437 = cv437;
      v438 = cv438;
      
      continue;}
    
    }
  let v492 = true;
  let v493 = stdlib.checkedBigNumberify('./index.rsh:54:54:decimal', stdlib.UInt_max, '3');
  let v494 = v431;
  let v500 = v437;
  let v501 = v438;
  
  while (await (async () => {
    const v504 = stdlib.ge(v493, stdlib.checkedBigNumberify('./index.rsh:56:34:decimal', stdlib.UInt_max, '1'));
    const v505 = v492 ? v504 : false;
    
    return v505;})()) {
    const v512 = stdlib.add(v494, stdlib.checkedBigNumberify('./index.rsh:70:27:decimal', stdlib.UInt_max, '5000'));
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 4,
      out_tys: [ctc3],
      timeoutAt: ['time', v512],
      waitIfNotPresent: false
      }));
    if (txn3.didTimeout) {
      const txn4 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 5,
        out_tys: [ctc3],
        timeoutAt: undefined /* mto */,
        waitIfNotPresent: false
        }));
      const {data: [v557], secs: v559, time: v558, didSend: v320, from: v556 } = txn4;
      undefined /* setApiDetails */;
      ;
      const v560 = false;
      await txn4.getOutput('whitelisters_alertEnd', 'v560', ctc4, v560);
      const cv492 = v492;
      const cv493 = v493;
      const cv494 = v558;
      const cv500 = v500;
      const cv501 = v501;
      
      v492 = cv492;
      v493 = cv493;
      v494 = cv494;
      v500 = cv500;
      v501 = cv501;
      
      continue;
      }
    else {
      const {data: [v525], secs: v527, time: v526, didSend: v280, from: v524 } = txn3;
      undefined /* setApiDetails */;
      ;
      const v529 = true;
      await txn3.getOutput('Claimers_claim', 'v529', ctc4, v529);
      await stdlib.mapSet(map0, v524, undefined /* Nothing */);
      const v536 = v500[stdlib.checkedBigNumberify('./index.rsh:66:25:application', stdlib.UInt_max, '0')];
      const v537 = v536[stdlib.checkedBigNumberify('./index.rsh:66:25:application', stdlib.UInt_max, '0')];
      const v538 = stdlib.div(v537, v493);
      const v544 = stdlib.sub(v537, v538);
      const v547 = v536[stdlib.checkedBigNumberify('./index.rsh:66:56:application', stdlib.UInt_max, '1')];
      const v548 = v536[stdlib.checkedBigNumberify('./index.rsh:66:56:application', stdlib.UInt_max, '2')];
      const v549 = [v544, v547, v548];
      const v550 = stdlib.Array_set(v500, stdlib.checkedBigNumberify('./index.rsh:66:56:application', stdlib.UInt_max, '0'), v549);
      ;
      const v551 = stdlib.sub(v493, stdlib.checkedBigNumberify('./index.rsh:67:38:decimal', stdlib.UInt_max, '1'));
      const cv492 = v492;
      const cv493 = v551;
      const cv494 = v526;
      const cv500 = v550;
      const cv501 = v501;
      
      v492 = cv492;
      v493 = cv493;
      v494 = cv494;
      v500 = cv500;
      v501 = cv501;
      
      continue;}
    
    }
  const v567 = v500[stdlib.checkedBigNumberify('./index.rsh:75:19:application', stdlib.UInt_max, '0')];
  const v568 = v567[stdlib.checkedBigNumberify('./index.rsh:75:19:application', stdlib.UInt_max, '0')];
  ;
  ;
  return;
  
  
  
  
  };
export async function _Claimers_claim5(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Claimers_claim5 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Claimers_claim5 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_Address;
  const ctc3 = stdlib.T_Token;
  const ctc4 = stdlib.T_Bool;
  const ctc5 = stdlib.T_UInt;
  const ctc6 = stdlib.T_Tuple([ctc5, ctc5, ctc4]);
  const ctc7 = stdlib.T_Array(ctc6, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc8 = stdlib.T_Tuple([]);
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v404, v405, v492, v493, v500, v501, v512] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'), [ctc2, ctc3, ctc4, ctc5, ctc7, ctc5, ctc5]);
  const v514 = ctc.selfAddress();
  const v516 = stdlib.protect(ctc8, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:59:10:application call to [unknown function] (defined at: ./index.rsh:59:10:function exp)', 'at ./index.rsh:59:10:application call to [unknown function] (defined at: ./index.rsh:59:10:function exp)'],
    msg: 'in',
    who: 'Claimers_claim'
    });
  const v518 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v514), null);
  let v519;
  switch (v518[0]) {
    case 'None': {
      const v520 = v518[1];
      v519 = false;
      
      break;
      }
    case 'Some': {
      const v521 = v518[1];
      v519 = true;
      
      break;
      }
    }
  stdlib.assert(v519, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:60:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:59:10:application call to [unknown function] (defined at: ./index.rsh:59:10:function exp)', 'at ./index.rsh:59:10:application call to [unknown function] (defined at: ./index.rsh:59:10:function exp)', 'at ./index.rsh:59:10:application call to [unknown function] (defined at: ./index.rsh:59:10:function exp)'],
    msg: 'Already a member',
    who: 'Claimers_claim'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v404, v405, v492, v493, v500, v501, v512, v516],
    evt_cnt: 1,
    funcNum: 4,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc8],
    pay: [stdlib.checkedBigNumberify('./index.rsh:62:13:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v525], secs: v527, time: v526, didSend: v280, from: v524 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Claimers_claim"
        });
      ;
      const v529 = true;
      const v530 = await txn1.getOutput('Claimers_claim', 'v529', ctc4, v529);
      
      await stdlib.simMapSet(sim_r, 0, v524, undefined /* Nothing */);
      const v536 = v500[stdlib.checkedBigNumberify('./index.rsh:66:25:application', stdlib.UInt_max, '0')];
      const v537 = v536[stdlib.checkedBigNumberify('./index.rsh:66:25:application', stdlib.UInt_max, '0')];
      const v538 = stdlib.div(v537, v493);
      const v544 = stdlib.sub(v537, v538);
      const v547 = v536[stdlib.checkedBigNumberify('./index.rsh:66:56:application', stdlib.UInt_max, '1')];
      const v548 = v536[stdlib.checkedBigNumberify('./index.rsh:66:56:application', stdlib.UInt_max, '2')];
      const v549 = [v544, v547, v548];
      const v550 = stdlib.Array_set(v500, stdlib.checkedBigNumberify('./index.rsh:66:56:application', stdlib.UInt_max, '0'), v549);
      sim_r.txns.push({
        kind: 'from',
        to: v524,
        tok: v405
        });
      const v551 = stdlib.sub(v493, stdlib.checkedBigNumberify('./index.rsh:67:38:decimal', stdlib.UInt_max, '1'));
      const v784 = v492;
      const v785 = v551;
      const v787 = v550;
      const v788 = v501;
      const v789 = stdlib.ge(v551, stdlib.checkedBigNumberify('./index.rsh:56:34:decimal', stdlib.UInt_max, '1'));
      const v790 = v492 ? v789 : false;
      if (v790) {
        const v791 = stdlib.add(v526, stdlib.checkedBigNumberify('./index.rsh:70:27:decimal', stdlib.UInt_max, '5000'));
        sim_r.isHalt = false;
        }
      else {
        const v792 = v550[stdlib.checkedBigNumberify('./index.rsh:75:19:application', stdlib.UInt_max, '0')];
        const v793 = v792[stdlib.checkedBigNumberify('./index.rsh:75:19:application', stdlib.UInt_max, '0')];
        sim_r.txns.push({
          kind: 'from',
          to: v404,
          tok: v405
          });
        sim_r.txns.push({
          kind: 'from',
          to: v404,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: v405
          })
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc3, ctc4, ctc5, ctc7, ctc5, ctc5, ctc8],
    waitIfNotPresent: false
    }));
  const {data: [v525], secs: v527, time: v526, didSend: v280, from: v524 } = txn1;
  undefined /* setApiDetails */;
  ;
  const v529 = true;
  const v530 = await txn1.getOutput('Claimers_claim', 'v529', ctc4, v529);
  if (v280) {
    stdlib.protect(ctc0, await interact.out(v525, v530), {
      at: './index.rsh:58:7:application',
      fs: ['at ./index.rsh:58:7:application call to [unknown function] (defined at: ./index.rsh:58:7:function exp)', 'at ./index.rsh:64:10:application call to "k" (defined at: ./index.rsh:63:11:function exp)', 'at ./index.rsh:63:11:application call to [unknown function] (defined at: ./index.rsh:63:11:function exp)'],
      msg: 'out',
      who: 'Claimers_claim'
      });
    }
  else {
    }
  
  await stdlib.mapSet(map0, v524, undefined /* Nothing */);
  const v536 = v500[stdlib.checkedBigNumberify('./index.rsh:66:25:application', stdlib.UInt_max, '0')];
  const v537 = v536[stdlib.checkedBigNumberify('./index.rsh:66:25:application', stdlib.UInt_max, '0')];
  const v538 = stdlib.div(v537, v493);
  const v544 = stdlib.sub(v537, v538);
  const v547 = v536[stdlib.checkedBigNumberify('./index.rsh:66:56:application', stdlib.UInt_max, '1')];
  const v548 = v536[stdlib.checkedBigNumberify('./index.rsh:66:56:application', stdlib.UInt_max, '2')];
  const v549 = [v544, v547, v548];
  const v550 = stdlib.Array_set(v500, stdlib.checkedBigNumberify('./index.rsh:66:56:application', stdlib.UInt_max, '0'), v549);
  ;
  const v551 = stdlib.sub(v493, stdlib.checkedBigNumberify('./index.rsh:67:38:decimal', stdlib.UInt_max, '1'));
  const v784 = v492;
  const v785 = v551;
  const v787 = v550;
  const v788 = v501;
  const v789 = stdlib.ge(v551, stdlib.checkedBigNumberify('./index.rsh:56:34:decimal', stdlib.UInt_max, '1'));
  const v790 = v492 ? v789 : false;
  if (v790) {
    const v791 = stdlib.add(v526, stdlib.checkedBigNumberify('./index.rsh:70:27:decimal', stdlib.UInt_max, '5000'));
    return;
    }
  else {
    const v792 = v550[stdlib.checkedBigNumberify('./index.rsh:75:19:application', stdlib.UInt_max, '0')];
    const v793 = v792[stdlib.checkedBigNumberify('./index.rsh:75:19:application', stdlib.UInt_max, '0')];
    ;
    ;
    return;
    }
  
  
  };
export async function _whitelisters_alertEnd5(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _whitelisters_alertEnd5 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _whitelisters_alertEnd5 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_Address;
  const ctc3 = stdlib.T_Token;
  const ctc4 = stdlib.T_Bool;
  const ctc5 = stdlib.T_UInt;
  const ctc6 = stdlib.T_Tuple([ctc5, ctc5, ctc4]);
  const ctc7 = stdlib.T_Array(ctc6, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc8 = stdlib.T_Tuple([]);
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v404, v405, v492, v493, v500, v501, v512] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'), [ctc2, ctc3, ctc4, ctc5, ctc7, ctc5, ctc5]);
  const v555 = stdlib.protect(ctc8, await interact.in(), {
    at: './index.rsh:71:7:application',
    fs: ['at ./index.rsh:71:7:application call to [unknown function] (defined at: ./index.rsh:71:7:function exp)', 'at ./index.rsh:70:37:application call to [unknown function] (defined at: ./index.rsh:70:37:function exp)'],
    msg: 'in',
    who: 'whitelisters_alertEnd'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v404, v405, v492, v493, v500, v501, v512, v555],
    evt_cnt: 1,
    funcNum: 5,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc8],
    pay: [stdlib.checkedBigNumberify('./index.rsh:71:7:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v557], secs: v559, time: v558, didSend: v320, from: v556 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "whitelisters_alertEnd"
        });
      ;
      const v560 = false;
      const v561 = await txn1.getOutput('whitelisters_alertEnd', 'v560', ctc4, v560);
      
      const v794 = v492;
      const v795 = v493;
      const v797 = v500;
      const v798 = v501;
      const v799 = stdlib.ge(v493, stdlib.checkedBigNumberify('./index.rsh:56:34:decimal', stdlib.UInt_max, '1'));
      const v800 = v492 ? v799 : false;
      if (v800) {
        const v801 = stdlib.add(v558, stdlib.checkedBigNumberify('./index.rsh:70:27:decimal', stdlib.UInt_max, '5000'));
        sim_r.isHalt = false;
        }
      else {
        const v802 = v500[stdlib.checkedBigNumberify('./index.rsh:75:19:application', stdlib.UInt_max, '0')];
        const v803 = v802[stdlib.checkedBigNumberify('./index.rsh:75:19:application', stdlib.UInt_max, '0')];
        sim_r.txns.push({
          kind: 'from',
          to: v404,
          tok: v405
          });
        sim_r.txns.push({
          kind: 'from',
          to: v404,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: v405
          })
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc3, ctc4, ctc5, ctc7, ctc5, ctc5, ctc8],
    waitIfNotPresent: false
    }));
  const {data: [v557], secs: v559, time: v558, didSend: v320, from: v556 } = txn1;
  undefined /* setApiDetails */;
  ;
  const v560 = false;
  const v561 = await txn1.getOutput('whitelisters_alertEnd', 'v560', ctc4, v560);
  stdlib.protect(ctc0, await interact.out(v557, v561), {
    at: './index.rsh:71:7:application',
    fs: ['at ./index.rsh:71:7:application call to [unknown function] (defined at: ./index.rsh:71:7:function exp)', 'at ./index.rsh:72:8:application call to "k" (defined at: ./index.rsh:71:7:function exp)', 'at ./index.rsh:70:37:application call to [unknown function] (defined at: ./index.rsh:70:37:function exp)'],
    msg: 'out',
    who: 'whitelisters_alertEnd'
    });
  
  const v794 = v492;
  const v795 = v493;
  const v797 = v500;
  const v798 = v501;
  const v799 = stdlib.ge(v493, stdlib.checkedBigNumberify('./index.rsh:56:34:decimal', stdlib.UInt_max, '1'));
  const v800 = v492 ? v799 : false;
  if (v800) {
    const v801 = stdlib.add(v558, stdlib.checkedBigNumberify('./index.rsh:70:27:decimal', stdlib.UInt_max, '5000'));
    return;
    }
  else {
    const v802 = v500[stdlib.checkedBigNumberify('./index.rsh:75:19:application', stdlib.UInt_max, '0')];
    const v803 = v802[stdlib.checkedBigNumberify('./index.rsh:75:19:application', stdlib.UInt_max, '0')];
    ;
    ;
    return;
    }
  
  
  };
export async function _whitelisters_alertEnd6(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _whitelisters_alertEnd6 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _whitelisters_alertEnd6 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_Address;
  const ctc3 = stdlib.T_Token;
  const ctc4 = stdlib.T_Bool;
  const ctc5 = stdlib.T_UInt;
  const ctc6 = stdlib.T_Tuple([ctc5, ctc5, ctc4]);
  const ctc7 = stdlib.T_Array(ctc6, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc8 = stdlib.T_Tuple([]);
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v404, v405, v429, v430, v437, v438, v449] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6'), [ctc2, ctc3, ctc4, ctc5, ctc7, ctc5, ctc5]);
  const v480 = stdlib.protect(ctc8, await interact.in(), {
    at: './index.rsh:49:7:application',
    fs: ['at ./index.rsh:49:7:application call to [unknown function] (defined at: ./index.rsh:49:7:function exp)', 'at ./index.rsh:48:37:application call to [unknown function] (defined at: ./index.rsh:48:37:function exp)'],
    msg: 'in',
    who: 'whitelisters_alertEnd'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v404, v405, v429, v430, v437, v438, v449, v480],
    evt_cnt: 1,
    funcNum: 7,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc8],
    pay: [stdlib.checkedBigNumberify('./index.rsh:49:7:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v482], secs: v484, time: v483, didSend: v191, from: v481 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "whitelisters_alertEnd"
        });
      ;
      const v485 = false;
      const v486 = await txn1.getOutput('whitelisters_alertEnd', 'v485', ctc4, v485);
      
      const v804 = v429;
      const v805 = v430;
      const v807 = v437;
      const v808 = v438;
      const v809 = stdlib.lt(v430, stdlib.checkedBigNumberify('./index.rsh:30:31:decimal', stdlib.UInt_max, '3'));
      const v810 = v429 ? v809 : false;
      if (v810) {
        const v811 = stdlib.add(v483, stdlib.checkedBigNumberify('./index.rsh:48:27:decimal', stdlib.UInt_max, '5000'));
        sim_r.isHalt = false;
        }
      else {
        const v845 = true;
        const v846 = stdlib.checkedBigNumberify('./index.rsh:54:54:decimal', stdlib.UInt_max, '3');
        const v848 = v437;
        const v849 = v438;
        const v852 = stdlib.add(v483, stdlib.checkedBigNumberify('./index.rsh:70:27:decimal', stdlib.UInt_max, '5000'));
        sim_r.isHalt = false;
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc3, ctc4, ctc5, ctc7, ctc5, ctc5, ctc8],
    waitIfNotPresent: false
    }));
  const {data: [v482], secs: v484, time: v483, didSend: v191, from: v481 } = txn1;
  undefined /* setApiDetails */;
  ;
  const v485 = false;
  const v486 = await txn1.getOutput('whitelisters_alertEnd', 'v485', ctc4, v485);
  stdlib.protect(ctc0, await interact.out(v482, v486), {
    at: './index.rsh:49:7:application',
    fs: ['at ./index.rsh:49:7:application call to [unknown function] (defined at: ./index.rsh:49:7:function exp)', 'at ./index.rsh:50:8:application call to "k" (defined at: ./index.rsh:49:7:function exp)', 'at ./index.rsh:48:37:application call to [unknown function] (defined at: ./index.rsh:48:37:function exp)'],
    msg: 'out',
    who: 'whitelisters_alertEnd'
    });
  
  const v804 = v429;
  const v805 = v430;
  const v807 = v437;
  const v808 = v438;
  const v809 = stdlib.lt(v430, stdlib.checkedBigNumberify('./index.rsh:30:31:decimal', stdlib.UInt_max, '3'));
  const v810 = v429 ? v809 : false;
  if (v810) {
    const v811 = stdlib.add(v483, stdlib.checkedBigNumberify('./index.rsh:48:27:decimal', stdlib.UInt_max, '5000'));
    return;
    }
  else {
    const v845 = true;
    const v846 = stdlib.checkedBigNumberify('./index.rsh:54:54:decimal', stdlib.UInt_max, '3');
    const v848 = v437;
    const v849 = v438;
    const v852 = stdlib.add(v483, stdlib.checkedBigNumberify('./index.rsh:70:27:decimal', stdlib.UInt_max, '5000'));
    return;
    }
  
  
  };
export async function _whitelisters_whiteListMyAddress6(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _whitelisters_whiteListMyAddress6 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _whitelisters_whiteListMyAddress6 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_Address;
  const ctc3 = stdlib.T_Token;
  const ctc4 = stdlib.T_Bool;
  const ctc5 = stdlib.T_UInt;
  const ctc6 = stdlib.T_Tuple([ctc5, ctc5, ctc4]);
  const ctc7 = stdlib.T_Array(ctc6, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc8 = stdlib.T_Tuple([]);
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v404, v405, v429, v430, v437, v438, v449] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6'), [ctc2, ctc3, ctc4, ctc5, ctc7, ctc5, ctc5]);
  const v451 = ctc.selfAddress();
  const v453 = stdlib.protect(ctc8, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:33:10:application call to [unknown function] (defined at: ./index.rsh:33:10:function exp)', 'at ./index.rsh:33:10:application call to [unknown function] (defined at: ./index.rsh:33:10:function exp)'],
    msg: 'in',
    who: 'whitelisters_whiteListMyAddress'
    });
  const v455 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v451), null);
  let v456;
  switch (v455[0]) {
    case 'None': {
      const v457 = v455[1];
      v456 = false;
      
      break;
      }
    case 'Some': {
      const v458 = v455[1];
      v456 = true;
      
      break;
      }
    }
  const v459 = v456 ? false : true;
  stdlib.assert(v459, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:34:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:33:10:application call to [unknown function] (defined at: ./index.rsh:33:10:function exp)', 'at ./index.rsh:33:10:application call to [unknown function] (defined at: ./index.rsh:33:10:function exp)', 'at ./index.rsh:33:10:application call to [unknown function] (defined at: ./index.rsh:33:10:function exp)'],
    msg: 'Already a member',
    who: 'whitelisters_whiteListMyAddress'
    });
  const v461 = stdlib.lt(v430, stdlib.checkedBigNumberify('./index.rsh:36:19:decimal', stdlib.UInt_max, '3'));
  stdlib.assert(v461, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:35:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:33:10:application call to [unknown function] (defined at: ./index.rsh:33:10:function exp)', 'at ./index.rsh:33:10:application call to [unknown function] (defined at: ./index.rsh:33:10:function exp)', 'at ./index.rsh:33:10:application call to [unknown function] (defined at: ./index.rsh:33:10:function exp)'],
    msg: 'Limit Exceeded cannot register for whiteListMyAddress',
    who: 'whitelisters_whiteListMyAddress'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v404, v405, v429, v430, v437, v438, v449, v453],
    evt_cnt: 1,
    funcNum: 6,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc8],
    pay: [stdlib.checkedBigNumberify('./index.rsh:40:13:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v465], secs: v467, time: v466, didSend: v157, from: v464 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "whitelisters_whiteListMyAddress"
        });
      ;
      const v469 = true;
      const v470 = await txn1.getOutput('whitelisters_whiteListMyAddress', 'v469', ctc4, v469);
      
      await stdlib.simMapSet(sim_r, 0, v464, null);
      const v476 = stdlib.add(v430, stdlib.checkedBigNumberify('./index.rsh:45:36:decimal', stdlib.UInt_max, '1'));
      const v855 = v429;
      const v856 = v476;
      const v858 = v437;
      const v859 = v438;
      const v860 = stdlib.lt(v476, stdlib.checkedBigNumberify('./index.rsh:30:31:decimal', stdlib.UInt_max, '3'));
      const v861 = v429 ? v860 : false;
      if (v861) {
        const v862 = stdlib.add(v466, stdlib.checkedBigNumberify('./index.rsh:48:27:decimal', stdlib.UInt_max, '5000'));
        sim_r.isHalt = false;
        }
      else {
        const v896 = true;
        const v897 = stdlib.checkedBigNumberify('./index.rsh:54:54:decimal', stdlib.UInt_max, '3');
        const v899 = v437;
        const v900 = v438;
        const v903 = stdlib.add(v466, stdlib.checkedBigNumberify('./index.rsh:70:27:decimal', stdlib.UInt_max, '5000'));
        sim_r.isHalt = false;
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc3, ctc4, ctc5, ctc7, ctc5, ctc5, ctc8],
    waitIfNotPresent: false
    }));
  const {data: [v465], secs: v467, time: v466, didSend: v157, from: v464 } = txn1;
  undefined /* setApiDetails */;
  ;
  const v469 = true;
  const v470 = await txn1.getOutput('whitelisters_whiteListMyAddress', 'v469', ctc4, v469);
  if (v157) {
    stdlib.protect(ctc0, await interact.out(v465, v470), {
      at: './index.rsh:32:7:application',
      fs: ['at ./index.rsh:32:7:application call to [unknown function] (defined at: ./index.rsh:32:7:function exp)', 'at ./index.rsh:42:10:application call to "k" (defined at: ./index.rsh:41:11:function exp)', 'at ./index.rsh:41:11:application call to [unknown function] (defined at: ./index.rsh:41:11:function exp)'],
      msg: 'out',
      who: 'whitelisters_whiteListMyAddress'
      });
    }
  else {
    }
  
  await stdlib.mapSet(map0, v464, null);
  const v476 = stdlib.add(v430, stdlib.checkedBigNumberify('./index.rsh:45:36:decimal', stdlib.UInt_max, '1'));
  const v855 = v429;
  const v856 = v476;
  const v858 = v437;
  const v859 = v438;
  const v860 = stdlib.lt(v476, stdlib.checkedBigNumberify('./index.rsh:30:31:decimal', stdlib.UInt_max, '3'));
  const v861 = v429 ? v860 : false;
  if (v861) {
    const v862 = stdlib.add(v466, stdlib.checkedBigNumberify('./index.rsh:48:27:decimal', stdlib.UInt_max, '5000'));
    return;
    }
  else {
    const v896 = true;
    const v897 = stdlib.checkedBigNumberify('./index.rsh:54:54:decimal', stdlib.UInt_max, '3');
    const v899 = v437;
    const v900 = v438;
    const v903 = stdlib.add(v466, stdlib.checkedBigNumberify('./index.rsh:70:27:decimal', stdlib.UInt_max, '5000'));
    return;
    }
  
  
  };
export async function Claimers_claim(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Claimers_claim expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Claimers_claim expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 5) {return _Claimers_claim5(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function whitelisters_alertEnd(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for whitelisters_alertEnd expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for whitelisters_alertEnd expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 5) {return _whitelisters_alertEnd5(ctcTop, interact);}
  if (step == 6) {return _whitelisters_alertEnd6(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function whitelisters_whiteListMyAddress(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for whitelisters_whiteListMyAddress expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for whitelisters_whiteListMyAddress expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 6) {return _whitelisters_whiteListMyAddress6(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
const _ALGO = {
  ABI: {
    impure: [`Claimers_claim()byte`, `_whitelisters_alertEnd5()byte`, `_whitelisters_alertEnd7()byte`, `whitelisters_alertEnd()byte`, `whitelisters_whiteListMyAddress()byte`],
    pure: [],
    sigs: [`Claimers_claim()byte`, `_whitelisters_alertEnd5()byte`, `_whitelisters_alertEnd7()byte`, `whitelisters_alertEnd()byte`, `whitelisters_whiteListMyAddress()byte`]
    },
  appApproval: `BiATAAEFBCAHBkopQgiOxbiuBp2r+qMJ0aLHxQrWkKGUBIDIr6AloI0GA4gnJgMBAAABASI1ADEYQQSaKWRJIls1ASEKWzUCMRkjEkEACDEAKChmQgRoNhoAF0lBAGAiNQQjNQZJIQsMQAAmSSEMDEAAF0khDQxAAAghDRJEKUIAYiEMEkQpQgGPIQsSRClCALNJIQ4MQAAaIQ4SRDQBSSEFDEAAByEFEkRC/9EkEkRCAAiB8536xQESRClCAO42GgIXNQQ2GgM2GgEXSSQMQAE6SSEGDEAA00khBQxAAGQhBRJEIQY0ARJENARJIhJMNAISEUQoZDUDSTUFNf+ABNyqJt40/1CwMgY0AyEHWw9EgAkAAAAAAAAB5QCwKDUHNANXACA0AyEEWzQDVygBFzQDIQhbMgY0A1cxETQDIQlbQgJUSCEGNAESRDQESSISTDQCEhFEKGQ1A0k1BTX/gATJ6I0MNP9QsDIGNAMhB1sMRIAJAAAAAAAAAdUBsCo1BzEAKCpmNANXACA0AyEEWzQDVygBFzQDIQhbIwgyBjQDVzERNAMhCVtCAexIJDQBEkQ0BEkiEkw0AhIRRChkNQNJNQU1/4AEaJJkYzT/ULAyBjQDIQdbD0SACQAAAAAAAAIwALAoNQc0A1cAIDQDIQRbNANXKAEXNAMhCFsyBjQDVzERNAMhCVtCAetJIwxAARBJJQxAAKZIJDQBEkQ0BEkiEkw0AhIRRChkSTUDSUkhBFs1/yEIWzX+VzERNf1JNQU1/IAE1OAYLTT8ULAyBjQDIQdbDESACQAAAAAAAAIRAbAqNQcxACgoZjT9VwARSTX7IltJNfo0/go1+bEisgE0+bISJbIQMQCyFDT/shGzNANXACA0/zQDVygBFzT+IwkyBjT6NPkJFjT7VwgIUDT7VxABUDQDIQlbQgE5IxJEIzQBEkQ0BEkiEkw0AhIRRChkSTUDSUlXACA1/yEEWzX+VygRNf2ABJqLkXSwNP1XABE1/CEPNP6IAhA0/zEAEkQ0/zT+IyIyBjT8IlshDwgWNPxXCAhQNPxXEAFQIkIAdkghEIgBzCI0ARJENARJIhJMNAISEURJNQUXNf+ABILEYf40/xZQsIERr0k1/lcAETX9IQqvNP1XCAhQNP1XEAFQNfwhEIgBirEisgEishIlshAyCrIUNP+yEbMxADT/FlA0/FAoSwFXADlnSCM1ATIGNQJCAQo1/zX+Nf01/DX7Nfo1+TT7NPwhEQwQQQA2NP0hEgg1+DT5NPoWUDT7FlEHCFA0/BZQNP5QNP8WUDT4FlAoSwFXAFJnSCEGNQEyBjUCQgC7NPk0+iMhETT9NP40/0IAADX/Nf41/TX8Nfs1+jX5NPs0/CMPEEEANTT9IRIINfg0+TT6FlA0+xZRBwhQNPwWUDT+UDT/FlA0+BZQKEsBVwBSZ0gkNQEyBjUCQgBesSKyATT+VwARIluyEiWyEDT5shQ0+rIRs7EisgE0/7III7IQNPmyB7OxIrIBIrISJbIQMgmyFTIKshQ0+rIRs0IAADEZJBJEsSKyASKyCCOyEDIJsgkyCrIHs0IABTEZIhJEKTQBFjQCFlBnNAZBAAqABBUffHU0B1CwNABJIwgyBBJEMRYSRCNDMRkiEkRC/98iMTQSRIECMTUSRCIxNhJEIzE3EkQiNQEiNQJC/640AElKIwg1ADgHMgoSRDgQIxJEOAgSRIk0AElKSSMINQA4FDIKEkQ4ECUSRDgRTwISRDgSEkSJ`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 1,
  mapDataSize: 1,
  stateKeys: 1,
  stateSize: 82,
  unsupported: [],
  version: 10,
  warnings: [`This program was compiled with trustworthy maps, but maps are not trustworthy on Algorand, because they are represented with local state. A user can delete their local state at any time, by sending a ClearState transaction. The only way to use local state properly on Algorand is to ensure that a user doing this can only 'hurt' themselves and not the entire system.`]
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v405",
                "type": "address"
              }
            ],
            "internalType": "struct T4",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v405",
                "type": "address"
              }
            ],
            "internalType": "struct T4",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T10",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v525",
                "type": "bool"
              }
            ],
            "internalType": "struct T16",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T17",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e4",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v557",
                "type": "bool"
              }
            ],
            "internalType": "struct T18",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T19",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e5",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v465",
                "type": "bool"
              }
            ],
            "internalType": "struct T20",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T21",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e6",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v482",
                "type": "bool"
              }
            ],
            "internalType": "struct T22",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T23",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e7",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v469",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v485",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v529",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v560",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "Claimers_claim",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "addr",
        "type": "address"
      }
    ],
    "name": "_reachMap0Ref",
    "outputs": [
      {
        "components": [
          {
            "internalType": "enum _enum_T0",
            "name": "which",
            "type": "uint8"
          },
          {
            "internalType": "bool",
            "name": "_None",
            "type": "bool"
          },
          {
            "internalType": "bool",
            "name": "_Some",
            "type": "bool"
          }
        ],
        "internalType": "struct T0",
        "name": "res",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T10",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v525",
                "type": "bool"
              }
            ],
            "internalType": "struct T16",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T17",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m4",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v557",
                "type": "bool"
              }
            ],
            "internalType": "struct T18",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T19",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m5",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v465",
                "type": "bool"
              }
            ],
            "internalType": "struct T20",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T21",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m6",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v482",
                "type": "bool"
              }
            ],
            "internalType": "struct T22",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T23",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m7",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_whitelisters_alertEnd5",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_whitelisters_alertEnd7",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "whitelisters_alertEnd",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "whitelisters_whiteListMyAddress",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x60806040526040516200238838038062002388833981016040819052620000269162000398565b6000805543600355620000386200021d565b604080513381528351602080830191909152840151516001600160a01b03168183015290517f0d6fab7154ce0a94b131216395b92f2e84190b0a295f5e2d18b75b3f1a456c479181900360600190a180516000908190528151602090810182905282516040908101839052835182850180519190915281850180518590528151518401518151909401939093528051518201518351901515920191909152519051620000e5929062000170565b6060820152620000f834156007620001f3565b6200010262000284565b338152602080840151516001600160a01b0316818301526060830151604080840191909152600160008190554390555162000140918391016200046c565b6040516020818303038152906040526002908051906020019062000166929190620002a5565b5050505062000540565b6200017a62000334565b60005b6001811015620001d0578481600181106200019c576200019c62000456565b6020020151828260018110620001b657620001b662000456565b602002015280620001c781620004d9565b9150506200017d565b5081818460018110620001e757620001e762000456565b60200201529392505050565b81620002195760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b6040805160e0810190915260006080820181815260a0830182905260c08301919091528152602081016200025062000334565b815260408051606081018252600080825260208281018290529282015291019081526020016200027f62000334565b905290565b60408051606081018252600080825260208201529081016200027f62000334565b828054620002b39062000503565b90600052602060002090601f016020900481019282620002d7576000855562000322565b82601f10620002f257805160ff191683800117855562000322565b8280016001018555821562000322579182015b828111156200032257825182559160200191906001019062000305565b506200033092915062000381565b5090565b60405180602001604052806001905b6200036a604051806060016040528060008152602001600081526020016000151581525090565b815260200190600190039081620003435790505090565b5b8082111562000330576000815560010162000382565b6000818303604080821215620003ad57600080fd5b80518082016001600160401b038082118383101715620003dd57634e487b7160e01b600052604160045260246000fd5b818452865183526020601f1986011215620003f757600080fd5b8351945060208501915084821081831117156200042457634e487b7160e01b600052604160045260246000fd5b509091526020840151906001600160a01b03821682146200044457600080fd5b90825260208101919091529392505050565b634e487b7160e01b600052603260045260246000fd5b81516001600160a01b0390811682526020808401519091168183015260408084015160a08401929082850160005b6001811015620004ce578251805183528481015185840152850151151585830152918301916060909101906001016200049a565b505050505092915050565b6000600019821415620004fc57634e487b7160e01b600052601160045260246000fd5b5060010190565b600181811c908216806200051857607f821691505b602082108114156200053a57634e487b7160e01b600052602260045260246000fd5b50919050565b611e3880620005506000396000f3fe6080604052600436106100d55760003560e01c80638931bdfd116100795780639f40dfcf116100565780639f40dfcf146101ad578063a98bf223146101b5578063ab53f2c6146101c8578063ad9fa3d8146101eb57005b80638931bdfd1461018a5780638f3c54f4146101925780639708edab146101a557005b80634c12491c116100b25780634c12491c1461014257806362ec3e981461015a5780636da017a014610162578063832307571461017557005b80631e93b0f1146100de5780632c10a159146101025780633bc5b7bf1461011557005b366100dc57005b005b3480156100ea57600080fd5b506003545b6040519081526020015b60405180910390f35b6100dc610110366004611814565b6101fe565b34801561012157600080fd5b50610135610130366004611845565b610222565b6040516100f99190611878565b61014a61024e565b60405190151581526020016100f9565b61014a61027d565b6100dc610170366004611814565b61035c565b34801561018157600080fd5b506001546100ef565b61014a61037c565b6100dc6101a0366004611814565b6103ab565b61014a6103cb565b61014a6103fa565b6100dc6101c3366004611814565b610426565b3480156101d457600080fd5b506101dd610446565b6040516100f99291906118eb565b6100dc6101f9366004611814565b6104e3565b61020661158f565b61021e61021836849003840184611995565b82610503565b5050565b60408051606081018252600080825260208201819052918101919091526102488261073b565b92915050565b60006102586115bd565b60208101516000905261026961158f565b6102738282610813565b6040015192915050565b600080546005148061029157506000546007145b61029a57600080fd5b6000546005141561030e57306001600160a01b0316634c12491c6040518163ffffffff1660e01b81526004016020604051808303816000875af11580156102e5573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061030991906119eb565b905090565b6000546007141561035957306001600160a01b0316638931bdfd6040518163ffffffff1660e01b81526004016020604051808303816000875af11580156102e5573d6000803e3d6000fd5b90565b61036461158f565b61021e61037636849003840184611a98565b826109f1565b60006103866115bd565b60208101516000905261039761158f565b6103a18282610bee565b6060015192915050565b6103b361158f565b61021e6103c536849003840184611a98565b82610bee565b60006103d56115bd565b6020810151600090526103e661158f565b6103f082826109f1565b6080015192915050565b60006104046115bd565b60208101516000905261041561158f565b61041f8282610dc6565b5192915050565b61042e61158f565b61021e61044036849003840184611a98565b82610dc6565b60006060600054600280805461045b90611ab4565b80601f016020809104026020016040519081016040528092919081815260200182805461048790611ab4565b80156104d45780601f106104a9576101008083540402835291602001916104d4565b820191906000526020600020905b8154815290600101906020018083116104b757829003601f168201915b50505050509050915091509091565b6104eb61158f565b61021e6104fd36849003840184611a98565b82610813565b610513600160005414600b611046565b815161052e90158061052757508251600154145b600c611046565b60008080556002805461054090611ab4565b80601f016020809104026020016040519081016040528092919081815260200182805461056c90611ab4565b80156105b95780601f1061058e576101008083540402835291602001916105b9565b820191906000526020600020905b81548152906001019060200180831161059c57829003601f168201915b50505050508060200190518101906105d19190611b72565b90506105fa60408051608081018252600060208201818152928201819052606082015290815290565b60408051338152855160208083019190915286015115158183015290517f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f19181900360600190a161064d34156008611046565b60408201515151610664906402540be40090611bf1565b8151526040828101805151602090810151845182015290515182015183519015159201919091528201516106aa906106a39033906402540be40061106c565b6009611046565b81516106c2906001600160a01b03163314600a611046565b6106ca6115ec565b825181516001600160a01b0391821690526020808501518351921691810191909152808201805160019052805160009201829052514360409182015284015183516107159290611084565b60208201805160600191909152516000608090910152610734816110f8565b5050505050565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526004602052604090205460ff16600181111561078757610787611862565b1415610804576001600160a01b038216600090815260046020526040908190208151606081019092528054829060ff1660018111156107c8576107c8611862565b60018111156107d9576107d9611862565b8152905460ff6101008204811615156020840152620100009091041615156040909101529050919050565b60008082526020820152919050565b6108236005600054146012611046565b815161083e90158061083757508251600154145b6013611046565b60008080556002805461085090611ab4565b80601f016020809104026020016040519081016040528092919081815260200182805461087c90611ab4565b80156108c95780601f1061089e576101008083540402835291602001916108c9565b820191906000526020600020905b8154815290600101906020018083116108ac57829003601f168201915b50505050508060200190518101906108e19190611cb2565b90506108f58160c001514310156014611046565b7f663356c9bc60432e38c96f881aa1e2828a9a5648f65169c66c8c7722e9c213653384604051610926929190611ccf565b60405180910390a161093a34156011611046565b604051600081527f7c56bcd4a5f00aa024a9364362ea1b45c2dc7784221b7ad1b06681e21a8e1d0c9060200160405180910390a16000602083015261097d6115ec565b815181516001600160a01b0391821690526020808401518351921691810191909152604080840151828401805191151590915260608086015182519094019390935280514392019190915260808085015182519093019290925260a08401519051909101526109eb81611257565b50505050565b610a016006600054146016611046565b8151610a1c901580610a1557508251600154145b6017611046565b600080805560028054610a2e90611ab4565b80601f0160208091040260200160405190810160405280929190818152602001828054610a5a90611ab4565b8015610aa75780601f10610a7c57610100808354040283529160200191610aa7565b820191906000526020600020905b815481529060010190602001808311610a8a57829003601f168201915b5050505050806020019051810190610abf9190611cb2565b9050610ad28160c0015143106018611046565b7f3db107724932cd939a23b93f47d8ef0f579ae2be97d3305f6cc838fe2fb98dfe3384604051610b03929190611ccf565b60405180910390a1610b1734156015611046565b604051600181527feda1de27a9650156388cbabce7a57bbacfa617cbb1530e29622847b255e929d09060200160405180910390a1600160808301819052336000908152600460205260409020805462ff00ff19169091179055610b786115ec565b815181516001600160a01b039182169052602080840151835192169181019190915260408301519082015190151590526060820151610bb990600190611bf1565b602080830180519091019190915280514360409091015260808084015182516060015260a0840151915101526109eb816110f8565b610bfe600660005414601a611046565b8151610c19901580610c1257508251600154145b601b611046565b600080805560028054610c2b90611ab4565b80601f0160208091040260200160405190810160405280929190818152602001828054610c5790611ab4565b8015610ca45780601f10610c7957610100808354040283529160200191610ca4565b820191906000526020600020905b815481529060010190602001808311610c8757829003601f168201915b5050505050806020019051810190610cbc9190611cb2565b9050610cd08160c00151431015601c611046565b7f4e3b66664dfaa8eec55d3e4b5320be5906866b0f0eff2c9c5b88206afe3bdf8d3384604051610d01929190611ccf565b60405180910390a1610d1534156019611046565b604051600081527f08a63de7778178f87b1192f311271fea4ff6329887c0d3665925a9e906729e8f9060200160405180910390a160006020830152610d586115ec565b815181516001600160a01b0391821690526020808401518351921691810191909152604080840151828401805191151590915260608086015182519094019390935280514392019190915260808085015182519093019290925260a08401519051909101526109eb816110f8565b610dd6600560005414600e611046565b8151610df1901580610dea57508251600154145b600f611046565b600080805560028054610e0390611ab4565b80601f0160208091040260200160405190810160405280929190818152602001828054610e2f90611ab4565b8015610e7c5780601f10610e5157610100808354040283529160200191610e7c565b820191906000526020600020905b815481529060010190602001808311610e5f57829003601f168201915b5050505050806020019051810190610e949190611cb2565b9050610e9e611615565b610eaf8260c0015143106010611046565b7f8d528f5e4eb7cb4d65f9857aba0fd34b00701475a124b40508c8832153576b943385604051610ee0929190611ccf565b60405180910390a1610ef43415600d611046565b604051600181527fa5028cb6c787bba87ef63a72affb330a6a6b848b2c1fc63e5d6b2d8b9fb578d99060200160405180910390a160018352336000908152600460205260409020805462ffffff19169055606082015160808301515151610f5b9190611cf9565b80825260808301515151610f6f9190611d1b565b6020828101805192909252608084018051518201518351830152515160409081015192519215159201919091528201518151610fad91903390611395565b610fb56115ec565b825181516001600160a01b039182169052602080850151835192169181019190915260408401519082015190151590526060830151610ff690600190611d1b565b816020015160200181815250504381602001516040018181525050611025836080015160008460200151611084565b6020820180516060019190915260a084015190516080015261073481611257565b8161021e5760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b600061107a838530856113a9565b90505b9392505050565b61108c61164d565b60005b60018110156110d8578481600181106110aa576110aa611bc5565b60200201518282600181106110c1576110c1611bc5565b6020020152806110d081611d32565b91505061108f565b50818184600181106110ec576110ec611bc5565b60200201529392505050565b604080516020810190915260008152602082015151611118576000611125565b6003826020015160200151105b156111e1576113888260200151604001516111409190611bf1565b815261114a611698565b8251516001600160a01b039081168252835160209081015190911681830152808401805151151560408085019190915281518301516060808601919091528251015160808086019190915291519091015160a0840152835160c0840152600660005543600155516111bd91839101611dd7565b604051602081830303815290604052600290805190602001906109eb9291906116ef565b6111e96115ec565b82515181516001600160a01b03918216905283516020908101518351921691810191909152808201805160019052805160039083015290840180516040908101518351909101528051606090810151835190910152516080908101519151015261125281611257565b505050565b604080516020810190915260008152602082015151611277576000611285565b600182602001516020015110155b1561131d576113888260200151604001516112a09190611bf1565b81526112aa611698565b8251516001600160a01b039081168252835160209081015190911681830152808401805151151560408085019190915281518301516060808601919091528251015160808086019190915291519091015160a0840152835160c0840152600560005543600155516111bd91839101611dd7565b815160208082015191519084015160600151515161133c929190611395565b8151516020830151608001516040516001600160a01b039092169181156108fc0291906000818181858888f1935050505015801561137e573d6000803e3d6000fd5b506000808055600181905561021e90600290611773565b6113a0838383611483565b61125257600080fd5b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b17905291516000928392839291891691839161141091611de6565b60006040518083038185875af1925050503d806000811461144d576040519150601f19603f3d011682016040523d82523d6000602084013e611452565b606091505b509150915061146382826001611554565b508080602001905181019061147891906119eb565b979650505050505050565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b1790529151600092839283929188169183916114e291611de6565b60006040518083038185875af1925050503d806000811461151f576040519150601f19603f3d011682016040523d82523d6000602084013e611524565b606091505b509150915061153582826002611554565b508080602001905181019061154a91906119eb565b9695505050505050565b6060831561156357508161107d565b8251156115735782518084602001fd5b60405163100960cb60e01b815260048101839052602401611063565b6040805160a08101825260008082526020820181905291810182905260608101829052608081019190915290565b6040518060400160405280600081526020016115e760405180602001604052806000151581525090565b905290565b6040805160808101825260009181018281526060820192909252908152602081016115e76117b0565b6040518060400160405280600081526020016115e7604051806060016040528060008152602001600081526020016000151581525090565b60405180602001604052806001905b611682604051806060016040528060008152602001600081526020016000151581525090565b81526020019060019003908161165c5790505090565b6040518060e0016040528060006001600160a01b0316815260200160006001600160a01b03168152602001600015158152602001600081526020016116db61164d565b815260200160008152602001600081525090565b8280546116fb90611ab4565b90600052602060002090601f01602090048101928261171d5760008555611763565b82601f1061173657805160ff1916838001178555611763565b82800160010185558215611763579182015b82811115611763578251825591602001919060010190611748565b5061176f9291506117e7565b5090565b50805461177f90611ab4565b6000825580601f1061178f575050565b601f0160209004906000526020600020908101906117ad91906117e7565b50565b6040518060a0016040528060001515815260200160008152602001600081526020016117da61164d565b8152602001600081525090565b5b8082111561176f57600081556001016117e8565b60006040828403121561180e57600080fd5b50919050565b60006040828403121561182657600080fd5b61107d83836117fc565b6001600160a01b03811681146117ad57600080fd5b60006020828403121561185757600080fd5b813561107d81611830565b634e487b7160e01b600052602160045260246000fd5b815160608201906002811061189d57634e487b7160e01b600052602160045260246000fd5b8083525060208301511515602083015260408301511515604083015292915050565b60005b838110156118da5781810151838201526020016118c2565b838111156109eb5750506000910152565b82815260406020820152600082518060408401526119108160608501602087016118bf565b601f01601f1916919091016060019392505050565b634e487b7160e01b600052604160045260246000fd5b6040516020810167ffffffffffffffff8111828210171561195e5761195e611925565b60405290565b6040516060810167ffffffffffffffff8111828210171561195e5761195e611925565b80151581146117ad57600080fd5b6000604082840312156119a757600080fd5b6040516040810181811067ffffffffffffffff821117156119ca576119ca611925565b6040528235815260208301356119df81611987565b60208201529392505050565b6000602082840312156119fd57600080fd5b815161107d81611987565b6000818303604080821215611a1c57600080fd5b805181810167ffffffffffffffff8282108183111715611a3e57611a3e611925565b818452829550863583526020601f1986011215611a5a57600080fd5b835194506020850191508482108183111715611a7857611a78611925565b50909152602084013590611a8b82611987565b9082526020015292915050565b600060408284031215611aaa57600080fd5b61107d8383611a08565b600181811c90821680611ac857607f821691505b6020821081141561180e57634e487b7160e01b600052602260045260246000fd5b600082601f830112611afa57600080fd5b611b0261193b565b80606080850186811115611b1557600080fd5b855b81811015611b6657828189031215611b2f5760008081fd5b611b37611964565b8151815260208083015181830152604080840151611b5481611987565b90830152908652909401938201611b17565b50919695505050505050565b600060a08284031215611b8457600080fd5b611b8c611964565b8251611b9781611830565b81526020830151611ba781611830565b6020820152611bb98460408501611ae9565b60408201529392505050565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b60008219821115611c0457611c04611bdb565b500190565b60006101208284031215611c1c57600080fd5b60405160e0810181811067ffffffffffffffff82111715611c3f57611c3f611925565b80604052508091508251611c5281611830565b81526020830151611c6281611830565b60208201526040830151611c7581611987565b604082015260608381015190820152611c918460808501611ae9565b608082015260e083015160a082015261010083015160c08201525092915050565b60006101208284031215611cc557600080fd5b61107d8383611c09565b6001600160a01b03831681526060810161107d602083018480518252602090810151511515910152565b600082611d1657634e487b7160e01b600052601260045260246000fd5b500490565b600082821015611d2d57611d2d611bdb565b500390565b6000600019821415611d4657611d46611bdb565b5060010190565b60018060a01b0380825116835260208181840151168185015260409150818301511515828501526060808401518186015260808401516080860160005b6001811015611dba5782518051835285810151868401528601511515868301529184019190830190600101611d8a565b5050505060a083015160e0850152505060c0015161010090910152565b61012081016102488284611d4d565b60008251611df88184602087016118bf565b919091019291505056fea26469706673582212207dcac8c38b56c488635037aabe6e25251475da772154242e15f82532b228032d64736f6c634300080c0033`,
  BytecodeLen: 9096,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:21:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:77:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:54:46:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: './index.rsh:28:44:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Alice": Alice,
  "Claimers_claim": Claimers_claim,
  "whitelisters_alertEnd": whitelisters_alertEnd,
  "whitelisters_whiteListMyAddress": whitelisters_whiteListMyAddress
  };
export const _APIs = {
  Claimers: {
    claim: Claimers_claim
    },
  whitelisters: {
    alertEnd: whitelisters_alertEnd,
    whiteListMyAddress: whitelisters_whiteListMyAddress
    }
  };
