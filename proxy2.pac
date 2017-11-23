function FindProxyForURL(url, host) {

	if (dnsDomainIs(host, "youtube.com")) {
		return "PROXY 66.70.191.5:3128";
	}
	return "DIRECT";
}
