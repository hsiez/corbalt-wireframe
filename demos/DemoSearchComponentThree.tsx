import styles from '@demos/DemoSearchComponentThree.module.scss';

import * as React from 'react';
import * as Utilities from '@common/utilities';

import { H1, H2, H3, H4, Lead, SubLead, P, Title, Text, SubTitle, SubText, UnitLabel } from '@system/typography';

import Audio from '@system/svg/Audio';
import Search from '@system/svg/Search';

const IconFocus = (props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="-0.5 -0.5 24 24" {...props}>
      <path
        fill="currentColor"
        d="M11.5 21.083333333333336c-1.325710416666667 0 -2.57154375 -0.2515625 -3.7375000000000003 -0.7546875 -1.16595625 -0.503125 -2.1802083333333333 -1.1859375 -3.042708333333333 -2.0484375000000004 -0.8625 -0.8625 -1.5453125 -1.8767520833333335 -2.0484375000000004 -3.042708333333333C2.168229166666667 14.071543750000002 1.9166666666666667 12.825710416666666 1.9166666666666667 11.5s0.2515625 -2.57154375 0.7546875 -3.7375000000000003c0.503125 -1.16595625 1.1859375 -2.1802083333333333 2.0484375000000004 -3.042708333333333 0.8625 -0.8625 1.8767520833333335 -1.5453125 3.042708333333333 -2.0484375000000004C8.92845625 2.168229166666667 10.174289583333334 1.9166666666666667 11.5 1.9166666666666667s2.57154375 0.2515625 3.7375000000000003 0.7546875c1.16595625 0.503125 2.1802083333333333 1.1859375 3.042708333333333 2.0484375000000004 0.8625 0.8625 1.5453125 1.8767520833333335 2.0484375000000004 3.042708333333333C20.831770833333334 8.92845625 21.083333333333336 10.174289583333334 21.083333333333336 11.5s-0.2515625 2.57154375 -0.7546875 3.7375000000000003c-0.503125 1.16595625 -1.1859375 2.1802083333333333 -2.0484375000000004 3.042708333333333 -0.8625 0.8625 -1.8767520833333335 1.5453125 -3.042708333333333 2.0484375000000004C14.071543750000002 20.831770833333334 12.825710416666666 21.083333333333336 11.5 21.083333333333336Zm0 -1.4375c1.00625 0 1.952604166666667 -0.16373125 2.8390625 -0.49114583333333334 0.8864583333333335 -0.32741458333333334 1.6890625000000001 -0.7946020833333334 2.4078125000000004 -1.4015625l-1.725 -1.7010416666666666c-0.49512291666666675 0.36737708333333335 -1.0382104166666668 0.6588541666666667 -1.6291666666666667 0.8744791666666667 -0.5909562500000001 0.215625 -1.221875 0.32343750000000004 -1.8927083333333334 0.32343750000000004 -1.59720625 0 -2.9548770833333333 -0.5590437500000001 -4.072916666666667 -1.6770833333333335 -1.1180395833333334 -1.1180395833333334 -1.6770833333333335 -2.475710416666667 -1.6770833333333335 -4.072916666666667 0 -1.59720625 0.5590437500000001 -2.9548770833333333 1.6770833333333335 -4.072916666666667 1.1180395833333334 -1.1180395833333334 2.475710416666667 -1.6770833333333335 4.072916666666667 -1.6770833333333335 1.59720625 0 2.9548770833333333 0.5590437500000001 4.072916666666667 1.6770833333333335 1.1180395833333334 1.1180395833333334 1.6770833333333335 2.475710416666667 1.6770833333333335 4.072916666666667 0 0.6708333333333333 -0.1078125 1.3017520833333334 -0.32343750000000004 1.8927083333333334 -0.215625 0.5909562500000001 -0.5071020833333334 1.13404375 -0.8744791666666667 1.6291666666666667l1.7010416666666666 1.7010416666666666c0.5909562500000001 -0.71875 1.0541666666666667 -1.5173770833333333 1.3895833333333334 -2.3958333333333335 0.33541666666666664 -0.87845625 0.503125 -1.8208333333333333 0.503125 -2.8270833333333334 0 -2.2680395833333336 -0.790625 -4.192708333333334 -2.371875 -5.773958333333334C15.692708333333334 4.144791666666667 13.768039583333334 3.354166666666667 11.5 3.354166666666667c-2.2680395833333336 0 -4.192708333333334 0.790625 -5.773958333333334 2.371875C4.144791666666667 7.307291666666667 3.354166666666667 9.231960416666666 3.354166666666667 11.5c0 2.2680395833333336 0.790625 4.192708333333334 2.371875 5.773958333333334C7.307291666666667 18.855208333333334 9.231960416666666 19.645833333333336 11.5 19.645833333333336Zm0 -3.8333333333333335c0.4632104166666667 0 0.9064395833333333 -0.06789791666666667 1.3296875 -0.20364583333333333s0.81060625 -0.33143958333333334 1.1619791666666666 -0.5869791666666667l-1.772916666666667 -1.7489583333333334c-0.11178958333333334 0.04791666666666667 -0.22760416666666666 0.08385416666666666 -0.34739583333333335 0.1078125 -0.11979166666666667 0.023958333333333335 -0.24356041666666667 0.0359375 -0.3713541666666667 0.0359375 -0.5270833333333333 0 -0.9783145833333334 -0.18768958333333333 -1.3536458333333334 -0.5630208333333334C9.771022916666666 12.478314583333333 9.583333333333334 12.027083333333335 9.583333333333334 11.5s0.18768958333333333 -0.9783145833333334 0.5630208333333334 -1.3536458333333334C10.521685416666667 9.771022916666666 10.972916666666666 9.583333333333334 11.5 9.583333333333334s0.9783145833333334 0.18768958333333333 1.3536458333333334 0.5630208333333334C13.228977083333334 10.521685416666667 13.416666666666668 10.972916666666666 13.416666666666668 11.5c0 0.12779375 -0.01595625 0.2555395833333333 -0.04791666666666667 0.38333333333333336 -0.031960416666666665 0.12779375 -0.071875 0.2555395833333333 -0.11979166666666667 0.38333333333333336l1.772916666666667 1.725c0.2555395833333333 -0.35137291666666665 0.45123125000000003 -0.7387312500000001 0.5869791666666667 -1.1619791666666666 0.13574791666666666 -0.42324791666666667 0.20364583333333333 -0.8664770833333334 0.20364583333333333 -1.3296875 0 -1.1979166666666667 -0.41927083333333337 -2.2161458333333335 -1.2578125 -3.0546875S12.697916666666668 7.1875 11.5 7.1875s-2.2161458333333335 0.41927083333333337 -3.0546875 1.2578125S7.1875 10.302083333333334 7.1875 11.5s0.41927083333333337 2.2161458333333335 1.2578125 3.0546875S10.302083333333334 15.8125 11.5 15.8125Z"
        strokeWidth="1"
      />
    </svg>
  );
};

const IconStorage = (props) => {
  return (
    <svg fill="none" viewBox="-0.5 -0.5 24 24" {...props}>
      <path
        fill="currentColor"
        d="M4.791666666666667 20.125 2.875 8.625h17.25l-1.9166666666666667 11.5H4.791666666666667Zm4.072916666666667 -6.229166666666667h5.270833333333334v-1.4375h-5.270833333333334v1.4375Zm-3.8333333333333335 -6.708333333333334v-1.4375h12.9375v1.4375h-12.9375Zm1.9166666666666667 -2.875V2.875h9.104166666666668v1.4375h-9.104166666666668Z"
        strokeWidth="1"
      />
    </svg>
  );
};

const IconSettings = (props) => {
  return (
    <svg viewBox="-0.5 -0.5 24 24" {...props}>
      <path
        fill="currentColor"
        d="M12.3625 22.041666666666668V12.458333333333334h9.583333333333334v9.583333333333334h-9.583333333333334Zm1.4375 -1.4375h6.708333333333334v-0.7666666666666667c-0.39928958333333336 -0.49512291666666675 -0.8864583333333335 -0.8904354166666667 -1.4614583333333333 -1.1859375 -0.575 -0.29550208333333333 -1.2059187500000002 -0.44322916666666673 -1.8927083333333334 -0.44322916666666673s-1.3177083333333335 0.14772708333333334 -1.8927083333333334 0.44322916666666673c-0.575 0.29550208333333333 -1.0621687499999999 0.6908145833333333 -1.4614583333333333 1.1859375V20.604166666666668Zm3.354166666666667 -3.354166666666667c0.39928958333333336 0 0.7387312500000001 -0.1397729166666667 1.0182291666666667 -0.41927083333333337 0.2794979166666667 -0.2794979166666667 0.41927083333333337 -0.6189395833333334 0.41927083333333337 -1.0182291666666667 0 -0.39928958333333336 -0.1397729166666667 -0.7387312500000001 -0.41927083333333337 -1.0182291666666667 -0.2794979166666667 -0.2794979166666667 -0.6189395833333334 -0.41927083333333337 -1.0182291666666667 -0.41927083333333337 -0.39928958333333336 0 -0.7387312500000001 0.1397729166666667 -1.0182291666666667 0.41927083333333337 -0.2794979166666667 0.2794979166666667 -0.41927083333333337 0.6189395833333334 -0.41927083333333337 1.0182291666666667 0 0.39928958333333336 0.1397729166666667 0.7387312500000001 0.41927083333333337 1.0182291666666667 0.2794979166666667 0.2794979166666667 0.6189395833333334 0.41927083333333337 1.0182291666666667 0.41927083333333337Zm-7.858333333333333 3.8333333333333335 -0.4791666666666667 -3.01875c-0.30345625 -0.11178958333333334 -0.6229166666666667 -0.2635416666666667 -0.9583333333333334 -0.4552083333333333 -0.33541666666666664 -0.19166666666666668 -0.63091875 -0.39133541666666666 -0.8864583333333335 -0.5989583333333334l-2.8270833333333334 1.2937500000000002L1.9166666666666667 14.375l2.5875000000000004 -1.8927083333333334c-0.03194604166666667 -0.14375 -0.051908125 -0.30748125000000004 -0.059895833333333336 -0.49114583333333334 -0.007987708333333335 -0.18366458333333333 -0.011979166666666667 -0.34739583333333335 -0.011979166666666667 -0.49114583333333334 0 -0.14375 0.003991458333333334 -0.30748125000000004 0.011979166666666667 -0.49114583333333334 0.007987708333333335 -0.18366458333333333 0.027949791666666668 -0.34739583333333335 0.059895833333333336 -0.49114583333333334L1.9166666666666667 8.625l2.2281250000000004 -3.9291666666666667 2.8270833333333334 1.2937500000000002c0.2555395833333333 -0.20762291666666668 0.5510416666666667 -0.40729166666666666 0.8864583333333335 -0.5989583333333334 0.33541666666666664 -0.19166666666666668 0.6548770833333334 -0.33541666666666664 0.9583333333333334 -0.43125l0.4791666666666667 -3.042708333333333h4.408333333333333l0.4791666666666667 3.01875c0.30345625 0.11178958333333334 0.62689375 0.2595645833333333 0.9703125 0.44322916666666673 0.34341875 0.18366458333333333 0.6348958333333333 0.3873104166666667 0.8744791666666667 0.6109375l2.8270833333333334 -1.2937500000000002L21.083333333333336 8.625l-2.5875000000000004 1.9166666666666667h-4.0441666666666665c-0.2084375 -0.618125 -0.5808458333333333 -1.13203125 -1.1171770833333334 -1.54171875C12.798302083333333 8.590260416666666 12.186789583333333 8.385416666666668 11.5 8.385416666666668c-0.8602479166666667 0 -1.5944270833333334 0.30403125 -2.202489583333333 0.91209375C8.689447916666667 9.905572916666667 8.385416666666668 10.639752083333333 8.385416666666668 11.5c0 0.6867895833333334 0.19166666666666668 1.2937500000000002 0.575 1.8208333333333333 0.38333333333333336 0.5270833333333333 0.87845625 0.9024145833333334 1.4854166666666668 1.1260416666666668V21.083333333333336h-1.15Z"
        strokeWidth="1"
      />
    </svg>
  );
};

const IconNews = (props) => {
  return (
    <svg viewBox="-0.5 -0.5 24 24" {...props}>
      <path
        fill="currentColor"
        d="M2.875 20.125V2.875h12.506250000000001l4.74375 4.74375V20.125H2.875ZM14.590625000000001 4.3125v4.096875000000001H18.6875L14.590625000000001 4.3125Zm-7.90625 11.715625h9.631250000000001v-1.4375h-9.631250000000001v1.4375Zm0 -7.61875H11.5v-1.4375H6.684375v1.4375Zm0 3.809375h9.631250000000001v-1.4375h-9.631250000000001v1.4375Z"
        strokeWidth="1"
      />
    </svg>
  );
};

const IconGlobe = (props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="-0.5 -0.5 24 24" {...props}>
      <path
        fill="currentColor"
        d="M10.972916666666666 21.059375000000003c-1.2617895833333335 -0.06387291666666667 -2.44375 -0.359375 -3.545833333333334 -0.8864583333333335 -1.1020833333333333 -0.5270833333333333 -2.060416666666667 -1.2178979166666668 -2.875 -2.0723958333333337 -0.8145833333333333 -0.8544979166666667 -1.457466875 -1.8469479166666667 -1.9286458333333336 -2.9773020833333335C2.152258541666667 13.992864583333334 1.9166666666666667 12.785124999999999 1.9166666666666667 11.5c0 -1.325710416666667 0.2515625 -2.57154375 0.7546875 -3.7375000000000003 0.503125 -1.16595625 1.1859375 -2.1802083333333333 2.0484375000000004 -3.042708333333333 0.8625 -0.8625 1.8767520833333335 -1.5453125 3.042708333333333 -2.0484375000000004C8.92845625 2.168229166666667 10.174289583333334 1.9166666666666667 11.5 1.9166666666666667c2.3798770833333336 0 4.448247916666667 0.7506960416666667 6.205208333333333 2.2520833333333337 1.7569604166666668 1.5013729166666667 2.835085416666667 3.3861270833333337 3.234375 5.654166666666667h-1.4614583333333333c-0.27154375000000003 -1.3416666666666666 -0.8385416666666667 -2.5395833333333333 -1.7010416666666666 -3.59375 -0.8625 -1.0541666666666667 -1.940625 -1.8447916666666668 -3.234375 -2.371875v0.43125c0 0.5590437500000001 -0.19166666666666668 1.0461645833333333 -0.575 1.4614583333333333 -0.38333333333333336 0.41529375 -0.8544979166666667 0.6229166666666667 -1.4135416666666667 0.6229166666666667h-2.084375v2.084375c0 0.26483541666666666 -0.1078125 0.48673750000000005 -0.32343750000000004 0.6658020833333333 -0.215625 0.17906458333333333 -0.4591854166666667 0.26857291666666666 -0.7307291666666667 0.26857291666666666H7.427083333333334V11.5H10.0625v2.994791666666667h-1.6052083333333333l-4.8875 -4.8875c-0.07986270833333334 0.31946041666666664 -0.13576229166666667 0.6362375000000001 -0.16770833333333332 0.9504270833333334C3.370137291666667 10.871716666666668 3.354166666666667 11.185810416666667 3.354166666666667 11.5c0 2.15625 0.7267377083333334 4.016997916666667 2.1802083333333333 5.582291666666667 1.4534562500000001 1.5652937500000002 3.2663354166666667 2.4117895833333334 5.438541666666667 2.5395833333333333v1.4375Zm9.391666666666667 -0.6229166666666667 -3.2104166666666667 -3.2104166666666667c-0.33541666666666664 0.23958333333333334 -0.6987687499999999 0.42324791666666667 -1.0901041666666667 0.5510416666666667 -0.39133541666666666 0.12779375 -0.7912 0.19166666666666668 -1.19959375 0.19166666666666668 -1.1341875000000001 0 -2.0982708333333333 -0.39627083333333335 -2.8922499999999998 -1.1888125S10.78125 15.025085416666668 10.78125 13.892958333333334c0 -1.1321270833333332 0.39627083333333335 -2.0934791666666666 1.1888125 -2.884104166666667 0.7925416666666667 -0.790625 1.7548520833333334 -1.1859375 2.886979166666667 -1.1859375 1.1321270833333332 0 2.0934791666666666 0.39698958333333334 2.884104166666667 1.1909687500000001 0.790625 0.7939791666666667 1.1859375 1.7580625 1.1859375 2.8922499999999998 0 0.40839375 -0.06789791666666667 0.8082583333333334 -0.20364583333333333 1.19959375 -0.13574791666666666 0.39133541666666666 -0.3154354166666667 0.7626895833333334 -0.5390625 1.1140625000000002l3.2104166666666667 3.186458333333334 -1.0302083333333334 1.0302083333333334ZM14.8508125 16.53125c0.7369583333333334 0 1.3609770833333334 -0.25443750000000004 1.8721041666666667 -0.7633125000000001 0.5111270833333333 -0.5088750000000001 0.7666666666666667 -1.1317916666666668 0.7666666666666667 -1.8687500000000001 0 -0.7369583333333334 -0.25443750000000004 -1.3609770833333334 -0.7633125000000001 -1.8721041666666667 -0.5088750000000001 -0.5111270833333333 -1.1317916666666668 -0.7666666666666667 -1.8687500000000001 -0.7666666666666667 -0.7369583333333334 0 -1.3609770833333334 0.25443750000000004 -1.8721041666666667 0.7633125000000001 -0.5111270833333333 0.5088750000000001 -0.7666666666666667 1.1317916666666668 -0.7666666666666667 1.8687500000000001 0 0.7369583333333334 0.25443750000000004 1.3609770833333334 0.7633125000000001 1.8721041666666667 0.5088750000000001 0.5111270833333333 1.1317916666666668 0.7666666666666667 1.8687500000000001 0.7666666666666667Z"
        strokeWidth="1"
      />
    </svg>
  );
};

const IconHandshake = (props) => {
  return (
    <svg fill="none" viewBox="-.5 -.5 24 24" {...props}>
      <path
        d="m11.60776458 20.915625 10.66145833-10.709375-8.09791667-8.09792625-2.13229167 2.13229167 5.63020835 5.63021791-2.56354167 2.53958333-4.43229167-4.43229167-6.0375 5.98958333 1.365625 1.365625 5.103125-5.103125.52708333.503125-5.103125 5.103125 1.34166667 1.34166667 5.103125-5.07916667.503125.503125-5.12708333 5.103125 1.365625 1.365625 5.12708333-5.12708333.503125.503125-5.103125 5.103125 1.365625 1.365625zm-7.546875-7.37916667 6.58854167-6.58854167 4.45625 4.45625 1.53333333-1.53333333-7.78645833-7.78646792-8.121875 8.12188459z"
        fill="currentColor"
      />
    </svg>
  );
};

const IconConstruction = (props) => {
  return (
    <svg fill="none" {...props} viewBox="-.5 -.5 24 24" xmlns="http://www.w3.org/2000/svg">
      <path
        d="m18.4 20.125-6.01354167-6.01354167 1.365625-1.365625 6.01354167 6.01354167zm-13.91979167 0-1.365625-1.365625 6.94791667-6.94791667-2.56354167-2.56354167-.55104167.55104167-1.05416667-1.05416667v2.03645833l-.575.575-2.92291666-2.92291666.575-.575h2.06041667l-1.15-1.15 3.13854167-3.13856563c.27154375-.27152938.56699792-.45520833.88645833-.55104167.31946042-.09583333.67083333-.14375 1.05416667-.14375.38333333 0 .73470625.06788354 1.05416667.20364583s.61491458.33940813.88645833.6109375l-2.56354167 2.56356564 1.15 1.15-.575.575 2.49166667 2.49166667 2.92291667-2.92291667c-.12779375-.20767083-.22760417-.44725417-.29947917-.71875-.071875-.27154375-.1078125-.55904375-.1078125-.8625 0-.84654375.30748125-1.5772825.92239583-2.19221146s1.34564375-.92239583 2.1921875-.92239583c.23958333 0 .44322917.02395833.6109375.071875s.30748125.11180396.41927083.19166667l-2.03645833 2.03648229 1.796875 1.796875 2.03645833-2.03645833c.07987708.12774583.14772708.283475.20364583.4671875.05591875.18366458.08385417.3953125.08385417.63489583 0 .84649583-.30748125 1.577225-.92239583 2.1921875-.61491458.61491458-1.34564375.92239583-2.1921875.92239583-.2875 0-.53508542-.01998125-.74270833-.05989583-.20762292-.0399625-.39928958-.09985833-.575-.1796875z"
        fill="currentColor"
      />
    </svg>
  );
};

const IconText = (props) => {
  return (
    <svg fill="none" viewBox="-.5 -.5 24 24" {...props}>
      <path
        d="m3.83333333 13.63229167h1.078125l.55104167-1.58125h2.49166667l.575 1.58125h1.05416666l-2.32395833-6.18125h-1.10208333zm1.940625-2.46770833.91041667-2.56354167h.04791667l.91041667 2.56354167h-1.86875zm6.49270834 5.84583333c.79862708-.39928958 1.58125-.69876875 2.34791667-.8984375s1.58125-.29947917 2.44375-.29947917c.60696042 0 1.23385417.04791667 1.88072917.14375s1.20189375.22362708 1.66510417.38333333v-10.278125c-.54303958-.27154375-1.11803958-.47116458-1.725-.59895833s-1.21387292-.19166667-1.82083333-.19166667c-.8625 0-1.69706458.13177083-2.50364583.3953125s-1.56927083.63489583-2.28802083 1.1140625v10.23020834zm-.71875 2.15625c-.81458333-.60696042-1.70104167-1.07414792-2.659375-1.4015625s-1.940625-.49114584-2.946875-.49114584c-.83053958 0-1.72899146.16373125-2.6953125.49114583-.96632104.32741459-1.72899146.66685626-2.28802084 1.01822917v-13.70416666c.67083333-.38333333 1.45347063-.68680396 2.34791667-.91041667s1.77291667-.33541667 2.63541667-.33541667c1.00625 0 1.98456458.13576229 2.93489583.40729167s1.84081458.68678958 2.67135417 1.24583333c.81458333-.55904375 1.6890625-.97430396 2.6234375-1.24583333s1.89668541-.40729167 2.88697916-.40729167c.8625 0 1.74095625.11580021 2.63541667.34739583.89446042.23159563 1.67708333.53107479 2.34791667.8984375v13.70416667c-.54303958-.36737708-1.30175208-.71074792-2.27604167-1.03020833-.97428958-.31946042-1.87675208-.47916667-2.70729167-.47916667-1.00625 0-1.97258542.16770833-2.89895833.503125-.92637292.33541667-1.796875.79862708-2.61145833 1.38958333zm1.86875-9.91875v-1.15c.52708333-.22362708 1.06614583-.39133542 1.6171875-.503125s1.13001875-.16770833 1.73697917-.16770833c.41529375 0 .82258542.03196042 1.221875.09583333.39928958.06387292.790625.14375 1.17395833.23958333v1.05416667c-.38333333-.14375-.77064375-.2515625-1.16197917-.3234375s-.80260417-.1078125-1.23385417-.1078125c-.60696042 0-1.18991458.07585208-1.74895833.22760417s-1.09408125.36335208-1.60520833.63489583zm0 5.27083333v-1.17395833c.52708333-.22362708 1.06614583-.38731042 1.6171875-.49114583.55104167-.10383542 1.13001875-.15572917 1.73697917-.15572917.41529375 0 .82258542.03196042 1.221875.09583333.39928958.06387292.790625.14375 1.17395833.23958333v1.05416667c-.38333333-.14375-.77064375-.2515625-1.16197917-.3234375s-.80260417-.1078125-1.23385417-.1078125c-.60696042 0-1.18991458.071875-1.74895833.215625s-1.09408125.359375-1.60520833.646875zm0-2.63541667v-1.15c.52708333-.22362708 1.06614583-.39133542 1.6171875-.503125s1.13001875-.16770833 1.73697917-.16770833c.41529375 0 .82258542.03196042 1.221875.09583333.39928958.06387292.790625.14375 1.17395833.23958333v1.05416667c-.38333333-.14375-.77064375-.2515625-1.16197917-.3234375s-.80260417-.1078125-1.23385417-.1078125c-.60696042 0-1.18991458.07585208-1.74895833.22760417s-1.09408125.36335208-1.60520833.63489583z"
        fill="currentColor"
      />
    </svg>
  );
};

const IconImage = (props) => {
  return (
    <svg fill="none" viewBox="-.5 -.5 24 24" {...props}>
      <path
        d="m13.65625 14.27916667c1.19791667-.06387292 2.26803958-.51510417 3.21041667-1.35364583.94237708-.83854167 1.46946042-1.88072917 1.58125-3.1265625-1.19791667 0-2.29199792.43522708-3.28229167 1.30572917s-1.49341875 1.92864582-1.509375 3.17447916zm0 0c-.03196042-1.24583333-.5390625-2.30397708-1.52135417-3.17447917s-2.07239583-1.30572917-3.2703125-1.30572917c.11178958 1.24583333.63887292 2.28802083 1.58125 3.1265625s2.0125 1.28977292 3.21041667 1.35364583zm0-3.21041667c.33541667 0 .60696042-.10383542.81458333-.31145833s.31145833-.47916667.31145833-.81458333v-.23958333l.23958333.071875c.39928958.12779375.73072917.15970625.99427083.09583333.26354167-.06387292.45918542-.20762292.58697917-.43125s.1796875-.49512292.15572917-.81458333c-.02395833-.31946042-.21960208-.56699792-.58697917-.74270833l-.26354167-.11979167.26354167-.14375c.36737708-.19166667.56302083-.43925208.58697917-.74270833.02395833-.30345625-.02793542-.56699792-.15572917-.790625s-.32741458-.36737708-.59895833-.43125-.59895833-.03196042-.98229167.09583333l-.23958333.071875v-.23958333c0-.33541667-.10383542-.60696042-.31145833-.81458333-.20762292-.20763729-.47916667-.31145833-.81458333-.31145833s-.6109375.10382104-.8265625.31145833c-.215625.20762292-.3234375.47916667-.3234375.81458333v.23958333l-.23958333-.071875c-.39928958-.12779375-.72675208-.15970625-.98229167-.09583333-.25553958.06387292-.45520833.20762292-.59895833.43125s-.19966875.48716875-.16770833.790625.23158125.55104167.59895833.74270833l.26354167.14375-.26354167.11979167c-.36737708.17571042-.56302083.42324792-.58697917.74270833-.02395833.31946042.02793542.59095625.15572917.81458333s.32741458.36737708.59895833.43125.59895833.03196042.98229167-.09583333l.23958333-.071875v.23958333c0 .33541667.1078125.60696042.3234375.81458333.215625.20762292.49114583.31145833.8265625.31145833zm0-2.18020833c-.31946042 0-.58697917-.1078125-.80260417-.3234375s-.3234375-.48314375-.3234375-.80260417.1078125-.58697917.3234375-.80260417.48314375-.3234375.80260417-.3234375.58697917.1078125.80260417.3234375.3234375.48314375.3234375.80260417-.1078125.58697917-.3234375.80260417-.48314375.3234375-.80260417.3234375zm-7.45104167 7.93020833v-14.90208333h14.90208333v14.90208333zm-2.515625 4.40833333-1.89270833-14.78229166 2.97083333-.33541667v12.146875h14.56666667l.14375 1.078125z"
        fill="currentColor"
      />
    </svg>
  );
};

const IconVideo = (props) => {
  return (
    <svg fill="none" viewBox="-.5 -.5 24 24" {...props}>
      <path
        d="m9.39166667 15.50104167 6.22916667-4.04895833-6.22916667-4.04895833v8.09791667zm-7.475 3.665625v-15.33333334h19.16666667v15.33333333h-19.16666667z"
        fill="currentColor"
      />
    </svg>
  );
};

const IconBookmark = (props) => {
  return (
    <svg fill="none" viewBox="-.5 -.5 24 24" {...props}>
      <path
        d="m3.83333333 21.08333333v-15.35729166h11.5v15.35729166l-5.75-2.85104167zm13.89583333-3.809375v-13.94377395h-10.92499999v-1.4375h12.3625v15.38127395h-1.4375z"
        fill="currentColor"
      />
    </svg>
  );
};

const IconResearch = (props) => {
  return (
    <svg fill="none" viewBox="-.5 -.5 24 24" {...props}>
      <path
        d="m4.79166667 20.125v-1.4375h4.98333333v-2.49166667h-.359375c-1.29375 0-2.38783125-.44720625-3.28229167-1.34166667s-1.34166667-1.98854167-1.34166667-3.28229167c0-.97428958.27949792-1.86074792.83854167-2.659375s1.29375-1.35762292 2.20416667-1.67708333c-.03196042.23958333-.02793542.47916667.01197917.71875s.11581458.47116458.22760417.69479167c-.59095625.22362708-1.04616458.60696042-1.365625 1.15s-.47916667 1.13404375-.47916667 1.77291667c0 .87845625.31145833 1.62916667.934375 2.25208333.62291667.62291667 1.37362708.934375 2.25208333.934375h8.31354167v1.4375h-5.55833334v2.49166667h6.0375v1.4375zm9.10416667-8.79270833-.33541667-.88645833-1.03020833.38333333-.59895833-1.62916667c.22362708-.22362708.39133542-.47518958.503125-.7546875s.16770833-.57897708.16770833-.8984375c0-.62291667-.20762292-1.16197917-.62291667-1.6171875s-.934375-.71477292-1.55729167-.77864583l-.52708333-1.41354167.98229167-.359375-.33541667-.88645833 1.58125-.575.33541667.88645833.95833333-.33541667 2.70729167 7.06770833-1.03020833.359375.33541667.88645833-1.53333333.55104167zm-3.68958333-2.5875c-.33541667 0-.61893958-.11581458-.85052083-.34739583s-.34739583-.51510417-.34739583-.85052083.11581458-.61893958.34739583-.85052083.51510417-.34739583.85052083-.34739583.61893958.11581458.85052083.34739583.34739583.51510417.34739583.85052083-.11581458.61893958-.34739583.85052083-.51510417.34739583-.85052083.34739583z"
        fill="currentColor"
      />
    </svg>
  );
};

const IconPartner = (props) => {
  return (
    <svg fill="none" viewBox="-.5 -.5 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="m11.5 7.93020833-3.01875-3.01875 3.01875-3.01877395 3.01875 3.01877395zm-10.54166667 11.23645834v-3.83333333c0-.46321042.16371687-.85852292.49114583-1.1859375.32742896-.3274625.72274146-.49114583 1.1859375-.49114583h3.378125c.27154375 0 .53106042.06785.77864583.20364583.24758542.13574792.45918542.3234375.63489583.56302083.46321042.67083333 1.05416667 1.18991458 1.77291667 1.55729167.71875.36732917 1.48541667.55104167 2.3.55104167s1.58125-.1837125 2.3-.55104167c.71875-.36737708 1.31770833-.88645833 1.796875-1.55729167.17571042-.23958333.38333333-.42727292.62291667-.56302083.23958333-.13579583.49512292-.20364583.76666667-.20364583h3.378125c.46321042 0 .85852292.16368333 1.1859375.49114583.32741459.32741458.49114584.72272708.49114584 1.18593749v3.83333333h-6.22916667v-2.85104167c-.575.52708333-1.23385417.934375-1.9765625 1.221875s-1.52135417.43125-2.3359375.43125-1.58925208-.14375-2.32395833-.43125-1.39758542-.69479167-1.98854167-1.221875v2.85104168zm2.875-7.1875c-.71875 0-1.33767521-.25956458-1.85677083-.77864583-.51909562-.51912917-.77864583-1.13802084-.77864583-1.85677084 0-.73475417.25955021-1.35767083.77864583-1.86875.51909563-.51112708 1.13802083-.76666667 1.85677083-.76666667.73472063 0 1.35762292.25553958 1.86875.76666667.51112708.51107917.76666667 1.13399583.76666667 1.86875 0 .71875-.25553958 1.33764167-.76666667 1.85677083-.51112708.51908125-1.13402937.77864584-1.86875.77864584zm15.33333333 0c-.71875 0-1.33768958-.25956458-1.85677083-.77864583-.51908125-.51912917-.77864583-1.13802084-.77864583-1.85677084 0-.73475417.25956458-1.35767083.77864583-1.86875.51908125-.51112708 1.13802084-.76666667 1.85677084-.76666667.73470625 0 1.35762292.25553958 1.86875.76666667.51112708.51107917.76666667 1.13399583.76666667 1.86875 0 .71875-.25553958 1.33764167-.76666667 1.85677083-.51112709.51908125-1.13404375.77864584-1.86875.77864584z"
        fill="currentColor"
      />
    </svg>
  );
};

const IconWeb = (props) => {
  return (
    <svg fill="none" viewBox="-.5 -.5 24 24" {...props}>
      <path
        d="m20.07708333 21.10729167-3.06666667-3.06666667v2.46770833h-1.4375v-4.93541666h4.93541667v1.4375h-2.49166667l3.06666667 3.06666667zm-8.57708333-.02395834c-1.32571042 0-2.57154375-.2515625-3.7375-.7546875s-2.18020833-1.1859375-3.04270833-2.0484375-1.5453125-1.871625-2.0484375-3.027375-.7546875-2.39070625-.7546875-3.70491666c0-1.33352083.2515625-2.58678125.7546875-3.75978125.503125-1.17285625 1.1859375-2.19305 2.0484375-3.06067708.8625-.86761271 1.87675208-1.55297917 3.04270833-2.05610417s2.41178958-.7546875 3.7375-.7546875 2.57154375.2515625 3.7375.7546875 2.18020833 1.18849146 3.04270833 2.05610417c.8625.86762708 1.5453125 1.88782083 2.0484375 3.06067708.503125 1.173.7546875 2.42626041.7546875 3.75978125 0 .36737708-.01595625.72272708-.04791667 1.06614583s-.08783125.69081458-.16770833 1.0421875h-1.509375c.09583333-.34610208.16770833-.69215625.215625-1.03811458.04791667-.34610208.071875-.70126042.071875-1.06542708s-.023575-.72833333-.07067708-1.0925c-.04695833-.36416667-.11749167-.72833333-.21155208-1.0925h-3.83860417c.03196042.36737708.06387292.73072917.09583333 1.09010417.03196042.359375.04791667.71875.04791667 1.078125s-.00996667.71477292-.02994792 1.06614583c-.01998125.35137292-.04992917.70279375-.08984375 1.05416667h-1.46145833c.04791667-.35137292.08385417-.70279375.1078125-1.05416667s.0359375-.70279375.0359375-1.05416667c0-.36335208-.01197917-.72675208-.0359375-1.09010417-.02395833-.36335208-.05989583-.72675208-.1078125-1.09010417h-5.14097917c-.054625.36737708-.09391667.73072917-.117875 1.09010417s-.0359375.71875-.0359375 1.078125.01197917.71477292.0359375 1.06614583c.02395833.35137292.05989583.70279375.1078125 1.05416667h4.71979167v1.4375h-4.45625c.22362708.84654375.49512292 1.67708333.81458333 2.49166667.31946042.81458333.81458333 1.50137292 1.48541667 2.06041667.36737708 0 .72675208-.01998125 1.078125-.05989583s.71074792-.09981042 1.078125-.1796875v1.4375c-.36737708.07987708-.72675208.13977292-1.078125.1796875s-.71074792.05989583-1.078125.05989583zm-7.86360417-7.42708333h3.83860417c-.03991458-.35137292-.0698625-.70279375-.08984375-1.05416667s-.02994792-.70279375-.02994792-1.05416667c0-.36335208.00800208-.72675208.02395833-1.09010417s.03991458-.72675208.071875-1.09010417h-3.81632291c-.0934375.36416667-.16355396.72833333-.21035417 1.0925-.0468002.36416668-.07019791.72833335-.07019791 1.09250001 0 .36416667.02356063.719325.07067708 1.06542708.04695833.34595833.11747729.6920125.21155208 1.03811458zm.4844375-5.72604167h3.58392708c.18222708-.76666667.4131375-1.51335208.69263542-2.24010417.27949792-.72675208.63489583-1.42552083 1.06614583-2.09635417-1.13404375.38333333-2.16822917.93836646-3.10260417 1.66510417-.934375.72675208-1.68107479 1.6171875-2.24010417 2.67135417zm5.31875 11.45208333c-.41529375-.65487708-.76268958-1.34166667-1.0421875-2.06041667s-.49914792-1.46145833-.65885417-2.228125h-3.61770833c.52708333 1.07012292 1.25383542 1.98053958 2.18020833 2.73125s1.97258542 1.26979167 3.13854167 1.55729167zm-.23958333-11.45208333h4.62395833c-.20762292-.8625-.49512292-1.69303958-.8625-2.49166667-.36737708-.7986127-.85449791-1.50937499-1.46145833-2.13229166-.60696042.63888729-1.09408125 1.35364583-1.46145833 2.14427083s-.646875 1.6171875-.83854167 2.4796875zm6.11752083 0h3.56164584c-.55904375-1.05416667-1.30175208-1.94862708-2.228125-2.68333333-.92637292-.73472063-1.95658125-1.27777938-3.090625-1.62916667.43125.65486271.78664792 1.34564375 1.06614583 2.07239583.27949792.72675208.50983333 1.4734375.69095833 2.24010417z"
        fill="currentColor"
      />
    </svg>
  );
};

const IconCheckmark = (props) => {
  return (
    <svg fill="none" viewBox="-.5 -.5 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="m10.08645833 15.86041667 6.78020834-6.78020834-1.10208333-1.078125-5.678125 5.678125-2.875-2.875-1.078125 1.078125 3.953125 3.97708333zm1.41354167 5.22291666c-1.30970625 0-2.54758542-.2515625-3.71354167-.7546875s-2.18418542-1.18991458-3.0546875-2.06041667c-.87048771-.87050208-1.55729167-1.88873125-2.06041667-3.0546875-.50312499-1.16595624-.75468749-2.40383541-.75468749-3.71354166 0-1.32571042.2515625-2.57154375.7546875-3.7375s1.18992896-2.18020833 2.06041667-3.04270833c.87050208-.8625 1.88873125-1.5453125 3.0546875-2.0484375 1.16595624-.503125 2.40383541-.7546875 3.71354166-.7546875 1.32571042 0 2.57154375.2515625 3.7375.7546875s2.18020833 1.1859375 3.04270833 2.0484375 1.5453125 1.87675208 2.0484375 3.04270833.7546875 2.41178958.7546875 3.7375c0 1.30970625-.2515625 2.54758542-.7546875 3.71354167s-1.1859375 2.18418542-2.0484375 3.0546875-1.87675208 1.55729167-3.04270833 2.06041667c-1.16595625.50312499-2.41178958.75468749-3.7375.75468749z"
        fill="var(--theme-success)"
      />
    </svg>
  );
};

const Item = (props) => {
  let style = {};
  let squareStyle = {};

  return (
    <li className={styles.item} style={style}>
      <span className={styles.left}><span className={styles.subject}>{props.icon}</span></span>
      <span className={styles.right}>{props.children}</span>
    </li>
  );
};

const SubItem = (props) => {
  let style = { ...props.style };
  let squareStyle = {};

  return (
    <li className={styles.subItem} style={style}>
      <span className={styles.left}>
        <span className={styles.subject}>{props.icon}</span> <IconCheckmark height="14px" style={{ position: 'absolute', right: -7, top: -4 }} />
      </span>
      <span className={styles.right}>{props.children}</span>
    </li>
  );
};

export default function DemoSearchComponentThree(props) {
  return (
    <div className={styles.root}>
      <div className={styles.top}>
        <div className={styles.navigation}>
          <SubTitle style={{ opacity: 0.6, padding: '8px 24px 12px 24px' }}>Search</SubTitle>
          <Item icon={<IconStorage height="24px" />}>History</Item>
          <Item icon={<IconGlobe height="24px" />}>Discovery</Item>
          <Item icon={<IconSettings height="24px" />}>Settings</Item>
          <SubTitle style={{ opacity: 0.6, padding: '32px 24px 12px 24px' }}>Configuration</SubTitle>
          <Item icon={<IconFocus height="24px" />}>Focus</Item>
          <SubItem icon={<IconWeb height="24px" />}>Web</SubItem>
          <SubItem icon={<IconResearch height="24px" />}>Academic</SubItem>
          <SubItem icon={<IconPartner height="24px" />}>Social</SubItem>
          <SubItem icon={<IconBookmark height="24px" />} style={{ marginBottom: 12 }}>
            Favorites
          </SubItem>
          <Item icon={<IconNews height="24px" />}>Results</Item>
          <SubItem icon={<IconText height="24px" />}>Text</SubItem>
          <SubItem icon={<IconImage height="24px" />}>Images</SubItem>
          <SubItem icon={<IconVideo height="24px" />}>Video</SubItem>
          <SubTitle style={{ opacity: 0.6, padding: '32px 24px 12px 24px' }}>Platform</SubTitle>
          <Item icon={<IconHandshake height="24px" />}>Advertising</Item>
          <Item icon={<IconConstruction height="24px" />}>Developers</Item>
        </div>
        <div className={styles.user}>
          <img className={styles.avatar} src="https://intdev-global.s3.us-west-2.amazonaws.com/public/internet-dev/86365454-82a5-4adb-8c6c-bdf650675782.png" />
          <div className={styles.name}>
            <div className={styles.fullName}>Jimmy Lee</div>
            <div className={styles.userName}>@wwwjim</div>
          </div>
        </div>
      </div>
      <div className={styles.children}>
        <div className={styles.containerInput}>
          <input className={styles.input} placeholder="Search everything" />
          <span className={styles.absoluteButton}>
            <span className={styles.transparentRoundButton}>
              <Audio height="24px" />
            </span>

            <span
              className={styles.roundButton}
              onClick={() => {
                Utilities.onHandleThemeChange();
              }}
            >
              <Search height="24px" />
            </span>
          </span>
        </div>
      </div>
    </div>
  );
}
