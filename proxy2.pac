function FindProxyForURL(url, host) {

	if (dnsDomainIs(host, "youtube.com")) {
		return "PROXY 127.0.0.1:80";
	}
	return "DIRECT";
}
