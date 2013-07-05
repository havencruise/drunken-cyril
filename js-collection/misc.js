// regular expression of all characters I've seen.
Zla = RegExp("^[^A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0800-\u1fff\u2c00-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]*[\u0591-\u07ff\ufb1d-\ufdff\ufe70-\ufefc]")


_P = '^((?:http|ftp)s?://)?';       // protocol (save as 1st arg)
_D = '((?:[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.)+(?:[a-zA-Z]{2,6}\.?|[a-zA-Z0-9-]{2,}\.?)|';       // domain 
_d = '\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3})';      // ....or ip (save as 2nd arg)
_p = '(?::\d+)?$';       // optional port
urlExp = RegExp(_P + _D + _d + _p);