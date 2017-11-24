function FindProxyForURL(url, host) {

	if (dnsDomainIs(host, "youtube.com")) {
		return "PROXY 37:8080";
	}
	return "DIRECT";
}
