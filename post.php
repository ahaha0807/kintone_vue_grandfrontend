<?php
  $data = json_encode($_POST);
  $url = 'https://mfd6z.cybozu.com/k/v1/record.json';
  $options = array('http' => array(
      'method' => 'POST',
      'header' => "Content-Type:application/json\r\n" .
                  "X-Cybozu-API-Token: pY503UNGAlph0C0uJ4dbbDn8sZO8uBv9GRV8vrFW\r\n", // 無効化済み
      'content' => $data
  ));
  // var_dump($data);
  $contents = file_get_contents($url, false, stream_context_create($options));
  // echo $contents;
?>
