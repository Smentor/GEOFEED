function FindProxyForURL(url, host) {

	if (dnsDomainIs(host, "youtube.com")) {
		return "PROXY 56:8080";
	}
	return "DIRECT";
}
