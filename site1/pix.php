<? /* closite/site1/pix.php
 *
 * This is just here to inject artificial latency so that we can see that
 * going back and forth between sites works.
 */
usleep(100000 * (rand() % 10));
header('Location: 1pix.gif');
?>