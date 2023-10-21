<?php
// Part 1
$filename = "counter.txt";
$count = file_get_contents($filename);
if ($count == null)
    $count = 95000;
echo $count;
