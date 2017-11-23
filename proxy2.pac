function FindProxyForURL(url, host) {

	if (dnsDomainIs(host, "youtube.com")) {
		return "PROXY 37.59.62.38:8080";
	}
	return "DIRECT";
}
