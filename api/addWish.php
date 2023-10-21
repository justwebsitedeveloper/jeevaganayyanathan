<?php
$filename = "counter.txt";
$count = file_get_contents($filename);
if ($count == null)
    $count = 95000;
$count++;
$handle = fopen($filename, "w+");
fwrite($handle, $count);
fclose($handle);

echo $count;
