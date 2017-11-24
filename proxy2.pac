function FindProxyForURL(url, host) {

	if (dnsDomainIs(host, "youtube.com")) {
		return "PROXY 176.106.145.122:8080";
	}
	return "DIRECT";
}
