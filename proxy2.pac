function FindProxyForURL(url, host) {

	if (dnsDomainIs(host, "youtube.com")) {
		return "PROXY 127.0.0.1:8080";
	}
	return "DIRECT";
}
