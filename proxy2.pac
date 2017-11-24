function FindProxyForURL(url, host) {

	if (dnsDomainIs(host, "youtube.com")) {
		return "PROXY 178.205.101.67:3129";
	}
	return "DIRECT";
}
