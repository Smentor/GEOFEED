function FindProxyForURL(url, host) {

	if (dnsDomainIs(host, "youtube.com")) {
		return "PROXY 178:3129";
	}
	return "DIRECT";
}
