function FindProxyForURL(url, host) {

	if (dnsDomainIs(host, "youtube.com")) {
		return "PROXY 91.205.52.234:8081";
	}
	return "DIRECT";
}
