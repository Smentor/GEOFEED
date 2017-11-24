function FindProxyForURL(url, host) {

	if (dnsDomainIs(host, "youtube.com")) {
		return "PROXY 17.67:3129";
	}
	return "DIRECT";
}
