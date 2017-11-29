<?php
/**
 * Created by PhpStorm.
 * User: hkim
 * Date: 2017-11-29
 * Time: 오전 10:54
 */

/*
 * @param string $tag, string $type
 * @return string
 *
 * $tag xml, html string
 * $type attributes string
 */
function get_tag_attr_value($tag, $type)
{
    $tag = simplexml_load_string($tag);

    if ($tag === false || empty($type)) {
        return false;
    }

    $tag = (array)$tag->attributes();

    foreach ($tag['@attributes'] as $attr => $value) {
        if ($attr == $type) {
            return $value;
        }
    }

    return false;
}