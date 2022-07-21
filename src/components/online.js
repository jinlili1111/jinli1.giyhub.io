import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function App({ server = "sg" }) {

  const { data, error } = useSWR(
    `https://${server}.game.yuuki.me/status/server`,
    fetcher
  );

  //console.log("tes", data);
  if(server == "近离2.8服"){
    server = "zjjcyw.club:88"
  }
  if(server == "3.0beta"){
    server = "zjjcyw.club:66"
  }
  var online = "?";
  if(data){
    if(data.status){
      if(data.status.playerCount){
        online = data.status.playerCount;
      }
    }
  }
  
  return (

      <div class="stat">
        <div class="stat-title">{server}</div>
        <div class="stat-value">{online}</div>
        <div class="stat-desc">在线人数</div>
        <div class="stat-desc">{seraddress}</div>
      </div>

  );
}
