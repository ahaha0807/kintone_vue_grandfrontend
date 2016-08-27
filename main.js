let searchRequest = (data) => {
  // console.log(data.pref);
  var src = "https://app.rakuten.co.jp/services/api/Travel/KeywordHotelSearch/20131024";
  var apiKey = "?applicationId=1071125400556730362";
  var params = "";

  // params += "&largeClassCode=japan";
  if(data.pref !== "default"){
    params += "&middleClassCode=" + data.pref;
  }
  params += "&keyword=" + encodeURI(data.keyword);
  params += "&sort=" + data.order;

  return xhrGet(src + apiKey + params, data);
}

let xhrGet = (url, data) => {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', url);
  xhr.onload = () => {
    if (xhr.status === 429) {
      // TODO: API 利用制限の表示
    } else {
      if (xhr.status === 404) {
        // TODO: 検索結果が見つかりませんでしたの表示
      } else {
        if (xhr.status === 200) {
            // success
            data.searchData = JSON.parse(xhr.responseText);
            data.searchData = data.searchData.hotels;
        } else {
            // error
            data.searchData = JSON.parse(xhr.responseText);
        }
      }
    }
  }
  xhr.send();
}

let searchHotels = (_this) => {
  searchRequest(_this);
}

let kintonePost = (selectHotel) => {
  console.log(selectHotel);
  var hotelData = dataAjustment(selectHotel);
  console.log(hotelData);
}

let dataAjustment = (rawData) => {
  var retData = {
    name: "",
    infoUrl: "",
    minCharge: "",
    station: "",
    access: "",
    propment: ""
  }
  rawData = rawData.hotel[0].hotelBasicInfo;

  retData.name = rawData.hotelName;
  retData.infoUrl = rawData.hotelInformationUrl;
  retData.minCharge = rawData.hotelMinCharge;
  retData.station = rawData.nearestStation;
  retData.access = rawData.access;

  return retData;
}

var inputData = new Vue(
  {
    el: '#input',
    data: {
      pref: "",
      city: "",
      type: "",
      order: "",
      hotels: [],
      prefOps: [
        {"label": "北海道","slug": "hokkaido"},
        {"label": "青森県","slug": "aomori"},
        {"label": "岩手県","slug": "iwate" },
        {"label": "宮城県","slug": "miyagi"},
        {"label": "秋田県","slug": "akita"},
        {"label": "山形県", "slug": "yamagata"},
        {"label": "福島県","slug": "fukushima"},
        {"label": "茨城県","slug": "ibaraki"},
        {"label": "栃木県", "slug": "tochigi"},
        {"label": "群馬県", "slug": "gunma"},
        {"label": "埼玉県", "slug": "saitama"},
        {"label": "千葉県", "slug": "chiba"},
        {"label": "東京都", "slug": "tokyo"},
        {"label": "神奈川県", "slug": "kanagawa"},
        {"label": "新潟県", "slug": "nigata"},
        {"label": "富山県", "slug": "toyama"},
        {"label": "石川県", "slug": "ishikawa"},
        {"label": "福井県", "slug": "fukui"},
        {"label": "山梨県", "slug": "yamanashi"},
        {"label": "長野県", "slug": "nagano"},
        {"label": "岐阜県", "slug": "gifu"},
        {"label": "静岡県", "slug": "shizuoka"},
        {"label": "愛知県", "slug": "aichi"},
        {"label": "三重県", "slug": "mie"},
        {"label": "滋賀県", "slug": "shiga"},
        {"label": "京都府", "slug": "kyoto"},
        {"label": "大阪府", "slug": "osaka"},
        {"label": "兵庫県", "slug": "hyogo"},
        {"label": "奈良県", "slug": "nara"},
        {"label": "和歌山県","slug": "wakayama"},
        {"label": "鳥取県", "slug": "tottori"},
        {"label": "島根県","slug": "shimane"},
        {"label": "岡山県", "slug": "okayama"},
        {"label": "広島県", "slug": "hiroshima"},
        {"label": "山口県", "slug": "yamaguchi"},
        {"label": "徳島県", "slug": "tokushima"},
        {"label": "香川県", "slug": "kagawa"},
        {"label": "愛媛県", "slug": "ehime"},
        {"label": "高知県", "slug": "kochi"},
        {"label": "福岡県", "slug": "fukuoka"},
        {"label": "佐賀県", "slug": "saga"},
        {"label": "長崎県", "slug": "nagasaki"},
        {"label": "熊本県", "slug": "kumamoto"},
        {"label": "大分県", "slug": "oita"},
        {"label": "宮崎県", "slug": "miyazaki"},
        {"label": "鹿児島県", "slug": "kagoshima"},
        {"label": "沖縄県","slug": "okinawa"}
    ],
    orders: [
      {label: "料金が高い順", value: "-roomCharge"},
      {label: "料金が安い順", value: "+roomCharge"}
    ],
    searchData: []
  },
    methods: {
      request: function(event){ searchHotels(this); },
      kintonePost: function(hotelData) { kintonePost(hotelData); }
    }
  }
)













// let logRend = () => {
//   console.log(inputData.place);
// }
//
// let preDataRendering = () => {
//   var data = getPreName();
//   // var jpData = data.areaClasses.largeClasses[0].largeClass[0].middleClasses[0];
//   console.log(data);
// }
//
// let getPreName = () => {
//   var prefData;
//   var src = "https://app.rakuten.co.jp/services/api/Travel/GetAreaClass/20131024";
//   var apiKey = "?applicationId=1071125400556730362";
//   var xhr = new XMLHttpRequest();
//   xhr.open('GET', src + apiKey);
//   xhr.onload = () => {
//     if (xhr.status === 200) {
//         // success
//         prefData = JSON.parse(xhr.responseText);
//     } else {
//         // error
//         prefData = JSON.parse(xhr.responseText);
//     }
//   }
//   xhr.send();
//
//   // $.getJSON("./prefData.json" , (data) => {
//   //   var len = data.length;
//   //   prefData = data;
//   // });
//
//   return prefData;
// }
